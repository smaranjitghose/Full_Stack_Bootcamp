# HTML Practice Exercises

## Exercise 1: Basic Page Structure
Create a simple webpage about your favorite hobby. Requirements:
- Use proper HTML5 document structure
- Include a title
- Add at least one heading
- Write 2-3 paragraphs
- Add a horizontal line between paragraphs

Sample structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Favorite Hobby</title>
</head>
<body>
    <!-- Add your content here -->
</body>
</html>
```

## Exercise 2: Text Formatting
Create a recipe page that uses various text formatting elements. Requirements:
- Use different heading levels (h1-h3)
- Include ingredients list using unordered list
- Add steps using ordered list
- Emphasize important words using bold and italic
- Include at least one superscript (like 2nd)

## Exercise 3: Links and Images
Create a simple portfolio page. Requirements:
- Add your name as the main heading
- Include a profile picture (use a placeholder image)
- Create a navigation menu with at least 3 links
- Add social media links that open in new tabs
- Include an email link

## Exercise 4: Tables
Create a weekly schedule. Requirements:
- Use table, tr, th, and td elements
- Include time slots for each day
- Merge cells where appropriate using colspan/rowspan
- Add a caption
- Use proper table headers

Example structure:
```html
<table border="1">
    <caption>My Weekly Schedule</caption>
    <thead>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <!-- Add more days -->
        </tr>
    </thead>
    <tbody>
        <!-- Add your schedule -->
    </tbody>
</table>
```

## Exercise 5: Forms
Create a survey form. Requirements:
- Include different types of inputs:
  - Text fields
  - Radio buttons
  - Checkboxes
  - Dropdown menu
  - Text area
- Add proper labels for all inputs
- Group related fields using fieldset
- Include a submit button
- Add form validation attributes



# HTML Advanced Tag Practice Exercises

## Exercise 1: Quote Formatting
Create a page about your favorite quotes. Requirements:
- Use `<blockquote>` for long quotes
- Use `<q>` for short inline quotes
- Include `cite` attribute for sources
- Add author attribution using `<cite>` element
- Include at least one definition using `<dfn>`

Example structure:
```html
<blockquote cite="https://source-url.com">
    <p>This is a longer quote that needs its own block.</p>
    <footer>— <cite>Author Name</cite></footer>
</blockquote>

<p>As the saying goes, <q cite="https://source-url.com">this is a short inline quote</q>.</p>
```

## Exercise 2: Interactive Input Types
Create a product customization form. Requirements:
- Use `<input type="color">` for color selection
- Include `<input type="range">` for quantity/size
- Add `<input type="date">` for delivery date
- Use `<input type="time">` for delivery time
- Include `<input type="file">` for custom design upload
- Add `<datalist>` for preset options

Example:
```html
<form>
    <label for="product-color">Choose product color:</label>
    <input type="color" id="product-color" name="product-color">

    <label for="size">Select size (cm):</label>
    <input type="range" id="size" min="10" max="50" value="25">
    
    <input list="suggestions" name="custom-options">
    <datalist id="suggestions">
        <option value="Option 1">
        <option value="Option 2">
    </datalist>
</form>
```

## Exercise 3: Code and Pre-formatted Text
Create a coding tutorial page. Requirements:
- Use `<pre>` for maintaining formatting
- Include `<code>` for code snippets
- Add `<kbd>` for keyboard inputs
- Use `<samp>` for program output
- Include `<var>` for variables

Example:
```html
<pre>
<code>
function greet(name) {
    console.log("Hello, " + name);
}
</code>
</pre>

<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

## Exercise 4: Details and Summary
Create an FAQ page. Requirements:
- Use `<details>` and `<summary>` for expandable content
- Include nested details elements
- Add formatted content within details
- Use different styling for open/closed states

Example:
```html
<details>
    <summary>What payment methods do you accept?</summary>
    <ul>
        <li>Credit Cards</li>
        <li>PayPal</li>
        <li>Bank Transfer</li>
    </ul>
</details>
```

## Exercise 5: Media Elements
Create a multimedia gallery page. Requirements:
- Add `<audio>` with controls
- Include `<video>` with poster image
- Use `<figure>` and `<figcaption>`
- Add `<track>` for subtitles
- Include fallback content

Example:
```html
<figure>
    <video controls poster="preview.jpg">
        <source src="video.mp4" type="video/mp4">
        <track kind="subtitles" src="captions.vtt" srclang="en">
        Your browser doesn't support video.
    </video>
    <figcaption>Demo Video Title</figcaption>
</figure>
```

## Exercise 6: Advanced Tables
Create a product comparison table. Requirements:
- Use `<colgroup>` and `<col>` for styling
- Include `<thead>`, `<tbody>`, and `<tfoot>`
- Add `scope` attributes for accessibility
- Use nested tables where appropriate
- Include summary data in footer

Example:
```html
<table>
    <colgroup>
        <col span="1" style="background-color: #f0f0f0">
        <col span="2">
    </colgroup>
    <thead>
        <tr>
            <th scope="col">Feature</th>
            <th scope="col">Basic</th>
            <th scope="col">Premium</th>
        </tr>
    </thead>
    <tbody>
        <!-- Add comparison data -->
    </tbody>
</table>
```

## Exercise 7: Progress and Meters
Create a skills assessment page. Requirements:
- Use `<progress>` for completion status
- Include `<meter>` for skill levels
- Add appropriate min/max values
- Include optimum ranges
- Show different states (low/medium/high)

Example:
```html
<p>Course completion:
    <progress value="70" max="100">70%</progress>
</p>

<p>Skill level:
    <meter value="8" min="0" max="10" optimum="9">8 out of 10</meter>
</p>
```

## Exercise 8: Description Lists
Create a glossary page. Requirements:
- Use `<dl>`, `<dt>`, and `<dd>`
- Include multiple terms per description
- Add multiple descriptions per term
- Include formatted content in descriptions
- Group related terms

Example:
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard markup language for web pages.</dd>
    
    <dt>CSS</dt>
    <dt>Cascading Style Sheets</dt>
    <dd>A style sheet language used for describing the presentation of a document.</dd>
</dl>
```

## Challenge Exercise: Technical Documentation
Create a comprehensive technical documentation page using all learned elements:
- Navigation with details/summary
- Code examples with pre/code
- Interactive demos with forms
- Media examples
- Glossary of terms
- Progress indicators
- Quote references


