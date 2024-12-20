const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const context = github.context;
        const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

        const pr = context.payload.pull_request;
        const validationResults = [];
        let isValid = true;

        // 1. Validate PR Title (Example: Assignment7 - 6ITA - John Doe)
        const titleRegex = /^Assignment\d+ - 6ITA - .+$/;
        if (!titleRegex.test(pr.title)) {
            validationResults.push("❌ PR title must follow format: 'AssignmentX - 6ITA - Your Name'");
            isValid = false;
        } else {
            validationResults.push("✅ PR title format is correct");
        }

        // 2. Validate Issue Link
        const issueLink = pr.body.match(/For #(\d+)/);
        if (!issueLink) {
            validationResults.push("❌ PR must link to an issue using 'For #<issue-number>'");
            isValid = false;
        } else {
            // Check if the issue exists
            try {
                await octokit.rest.issues.get({
                    ...context.repo,
                    issue_number: parseInt(issueLink[1])
                });
                validationResults.push("✅ Issue link is valid");
            } catch (error) {
                validationResults.push("❌ Linked issue does not exist");
                isValid = false;
            }
        }

        // 3. Validate Description
        if (!pr.body.includes('# 📋 Description') || 
            !pr.body.split('# 📋 Description')[1].trim().length) {
            validationResults.push("❌ PR must include a description");
            isValid = false;
        } else {
            validationResults.push("✅ Description is provided");
        }

        // 4. Validate Screenshots
        if (!pr.body.includes('# 📸 Screenshots') || 
            !pr.body.split('# 📸 Screenshots')[1].trim().length) {
            validationResults.push("❌ PR must include screenshots");
            isValid = false;
        } else {
            validationResults.push("✅ Screenshots are provided");
        }

        // Create or update PR comment with validation results
        const commentBody = `## PR Validation Results\n\n${validationResults.join('\n')}`;
        
        // Find existing bot comment
        const comments = await octokit.rest.issues.listComments({
            ...context.repo,
            issue_number: pr.number
        });
        
        const botComment = comments.data.find(comment => 
            comment.user.type === 'Bot' && 
            comment.body.includes('PR Validation Results')
        );

        if (botComment) {
            // Update existing comment
            await octokit.rest.issues.updateComment({
                ...context.repo,
                comment_id: botComment.id,
                body: commentBody
            });
        } else {
            // Create new comment
            await octokit.rest.issues.createComment({
                ...context.repo,
                issue_number: pr.number,
                body: commentBody
            });
        }

        // Set PR status
        const statusContext = 'PR Validation';
        await octokit.rest.checks.create({
            ...context.repo,
            head_sha: pr.head.sha,
            name: statusContext,
            status: 'completed',
            conclusion: isValid ? 'success' : 'failure',
            output: {
                title: isValid ? 'PR Validation Passed' : 'PR Validation Failed',
                summary: validationResults.join('\n')
            }
        });

        if (!isValid) {
            core.setFailed('PR validation failed');
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();