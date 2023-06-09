<a name="readme-top"></a>

# 📗 Table of Contents
- [📗 Table of Contents](#-table-of-contents)
- [📖 \[Todo\_List Project Testing\] ](#-todo_list-project-testing-)
  - [🛠 Built With  ](#-built-with--)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Usage](#usage)
  - [Build for production](#build-for-production)
    - [Set Up Linters](#set-up-linters)
  - [Define Linters](#define-linters)
  - [Install Linters](#install-linters)
  - [Set up Linters](#set-up-linters-1)
- [.gitignore](#gitignore)
  - [ESLint](#eslint)
  - [Web Hint](#web-hint)
    - [Stylelint](#stylelint)
  - [👥 Authors ](#-authors-)
  - [🤝 Contributing ](#-contributing-)
  - [🔭 Future Features ](#-future-features-)
- [**\[Feature-1\]**](#feature-1)
- [**\[Feature-2\]**](#feature-2)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

# 📖 [Todo_List Project Testing] <a name="Todo List"></a>


**[Todo_List App Testing]** is a simple website that allows the user to add and remove tasks from his todo list.Unit test is written for the To Do list application.

***Testing Part 1***

I have used Jest framework for testing.I created a test file ([..].test.js) for a file containing the add item and delete item functions that I  want to test.I have used a Mock folder for  a storage object to "imitate" localStorage operations and also used Mock HTML to test to check if  add/delete functions add or remove exactly one  element to/from the list in the DOM.

***Testing Part 2***
I have used jest framework for testing and created a test file(s) ([..].test.js) for a file(s) containing the following functions:
a function for editing the task description.
a function for updating an item's 'completed' status.
the "Clear all completed" function.
Used the mock storage object that is  created in Part 1 of Testing of this project to mock the localStorage updates.
Mocked the HTML elements to test DOM manipulation functions.
Grouped my tests using the describe() method.
## 🛠 Built With  <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <summary>Javascript runtime environment</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node JS</a></li>
  </ul>

  <summary>Version control</summary>
  <ul>
    <li><a href="github.com">Git Hub</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **[Desktop Version]**
- **[Dynamic Design]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>
Click <a href="https://harshi0102.github.io/ToDoList-Testing/"> here</a> for the live demo


## 💻 Getting Started <a name="getting-started"></a>

Creating your first "Todo List" project

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

-A Git hub account
-Git bash
-Node JS
-Visual Studio Code as your code editor

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone[(https://github.com/harshi0102/ToDoList-Testing.git)]
```

## Usage

Run Dev Server (Port 3000)

```
  npm run dev
```

## Build for production

```
npm run build
```

### Set Up Linters
## Define Linters
A linter is a tool to help you improve your code. You can learn more about Linters here: (source: (<https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/>)).

Advantages of Linting:

1. Fewer errors in production- The use of linters helps to diagnose and fix technical issues such as code smells. As a result, fewer defects make their way to production.
2. Achieving a more readable and consistent style, through the enforcement of its rules.
3. Having more secure and performant code.
4. Having an objective and measurable assessment of code quality.
5. Having fewer discussions about code style and aesthetic choices during code reviews.

## Install Linters 
You can find linters for most of the programming languages, e.g. Rubocop for Ruby or ESLint for JavaScript.

Also, there are many ways you can integrate a linter in your workflow:

-text editor plugin
-GitHub Actions
-GitHub apps

## Set up Linters
**Note:** The npm package manager is going to create a node_modules directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:

# .gitignore
node_modules/

## ESLint 
Run 
```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

## Web Hint 
This is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

**NOTE:** If you are using Windows, make sure you initialize npm to create `package.json` file. 
   ```
   npm init -y
   ```

1. Run
   ```
   npm install --save-dev hint@7.x
   ```
   *how to use npm: (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).*
2. Copy [.hintrc](.hintrc) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx hint .
   ```
   [Copy contents of .eslintrc.json to the root directory of your project](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json)
5. Fix validation errors.

### [Stylelint](https://stylelint.io/)

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

1. Run

npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
not sure how to use npm? Read this.

2. Copy .stylelintrc.json to the root directory of your project.

3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**

If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
4. Run npx stylelint "**/*.{css,scss}" on the root of your directory of your project.

5. Fix linter errors.

6. **IMPORTANT NOTE:** feel free to research auto-correct options for Stylelint if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 **Harshika Govind**

- GitHub: (https://github.com/harshi0102)
- Twitter: (https://twitter.com/harshika0102me)
- LinkedIn: (https://www.linkedin.com/in/harshikagovind/)

👤 **Nirere Marie Christelle**

- GitHub: [@Christelle-12](https://github.com/Christelle-12)
- Twitter: [@Chr1Nirere](https://twitter.com/Chr1Nirere)

## 🤝 Contributing <a name="contributing"></a>


## 🔭 Future Features <a name="future-features"></a>

# **[Feature-1]** 
- Add more styling (aesthetics)

# **[Feature-2]** 
- Dynamic todo list

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/ToDoList-Testing/issues).

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly leave a comment below and share it with someone who enjoys coding! Coding is all about continuous learning and allowing yourself to be a beginner. Keep going! 

## 🙏 Acknowledgments <a name="Microverse Inc."></a>

I'm thankful to Microverse for providing a study platform which guided me through this project and to my coding partners at Microverse for the collaborative effort. 


## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/harshi0102/ToDoList-Testing/blob/main/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
