---
name: Assignment Submission
about: Template for creating new assignment submissions
title: "[Assignment <number>] - <brief title>"
labels: assignment
assignees: ''
---

## Problem Statement
<!-- Brief description of the assignment -->

## Assignment Questions
<!-- Link to the assignment questions or paste them here -->
[Find the questions here](<link_to_questions>)

## Submission Guidelines

### File Format
* Create your solutions in a text file named `<enrollment-number>.txt`
* Map all queries properly to their respective question numbers using the following format:

```sql
1.


2.

```

### Directory Structure
* Place your submission file in the following directory:
  * For MongoDB assignments: `./submissions/mongodb/`
  * For Express assignments: `./submissions/express/`
  * For React assignments: `./submissions/react/`

### Submission Process
1. Fork this repository
2. Clone your forked repository
3. Create a new branch named `assignment<number>` (e.g., `assignment1`)
4. Add your solution file in the appropriate directory
5. Stage your changes
6. Commit with a descriptive message
7. Push to your fork
8. Create a Pull Request

### Pull Request Guidelines
* Title format: `[Assignment <number>] - <section> - <Your Name>`
* Link this issue in your PR description
* Mention the number of questions you have completed

### Important Notes
* Ensure your queries are properly formatted and tested
* Include comments where necessary to explain complex queries
* Make sure your file name matches the required format
* Do not modify any other files in the repository
