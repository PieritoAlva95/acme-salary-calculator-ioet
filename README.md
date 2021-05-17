# ACME Salary Calculator

# Contents

1. [Exercise](#exercise)
2. [How to run locally?](#local)
3. [Architecture](#architecture)
4. [Approach & Methodology](#approach)

## Exercise<a name="exercise"></a>

The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

```
Monday - Friday
00:01 - 09:00 25 USD
09:01 - 18:00 15 USD
18:01 - 00:00 20 USD

Saturday and Sunday
00:01 - 09:00 30 USD
09:01 - 18:00 20 USD
18:01 - 00:00 25 USD
```

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

```
MO: Monday
TU: Tuesday
WE: Wednesday
TH: Thursday
FR: Friday
SA: Saturday
SU: Sunday
```

**Input:** the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

**Output:** indicate how much the employee has to be paid

For example:

```
Case 1:
INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00

OUTPUT:
The amount to pay RENE is: 215 USD
```

```
Case 2:
INPUT
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:
The amount to pay ASTRID is: 85 USD
```

## How to run locally?<a name="local"></a>

1. Download [Visual Studio Code](https://code.visualstudio.com/download).

2. Download [Git](https://git-scm.com/download).

3. Download the [repository](https://github.com/PieritoAlva95/acme-salary-calculator-ioet) or use the command `git clone https://github.com/PieritoAlva95/acme-salary-calculator-ioet` in your terminal.

4. Within Visual Studio Code download and install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

5. Open the project and click to Go Live from the status bar to turn the server on/off. Like in the image below.
   <img src="https://raw.githubusercontent.com/ritwickdey/vscode-live-server/master/images/Screenshot/vscode-live-server-statusbar-3.jpg" alt="Live server example">

6. You can create your custom `input-data.txt` file if you want, following the rules that are shown in the main page of the project. Or you can use the .txt file that is attached in the repository with the name `input-data.txt`.

7. Upload the `input-data.txt` file you created and observe the results in the text area of the main page.

Or you can go to the [page](https://pieritoalva95.github.io/acme-salary-calculator-ioet/) `https://pieritoalva95.github.io/acme-salary-calculator-ioet/` and upload the .txt file created in step 6.

## Architecture <a name="architecture"></a>

The program is structured in five sections:

- The section of constants and global variables `salary-constants.js` that were used within the project.
- The scripts section, where you will find the main class `app.js` of the project and the class `salary-calculator.js` in which you have the methods to calculate the salary to be paid.
- The styles section `style.css` used on the main page of the project.
- The utilities section contains the classes `format-text.js`, `format-time.js` and methods that allow us to make the separation of strings and to obtain the different data necessary to perform the calculation of the salary.
- And finally the testing section, where the different tests performed to the methods and functions of the project can be found.

The exercise is solved using OOP to create objects that execute functions of the three main classes in the project `salary-calculator.js`, `format-text.js` and `format-time.js`.

## Approach & Methodology <a name="approach"></a>

I used Javascript because of the many methods that have to manage strings and arrays, specially the `split` and `toString()` that helps to change between array and string or viceversa depending on the case.`FileReader()` API reads the content of the text file. This API has the property `onload` that save the content of the file, so I used a variable to manipulate that text for later tasks.

The methodology used in the project is detailed below:

I started with the set up of the environment, creating the basic project files, creating the repository, creating the README and configuring the GitHub actions.

Then the basic requirements of the exercise were obtained, i.e., what was required for the project to be considered functional.

I worked on the part of the `HTML` file and created its styles, in this case I tried to use a style similar to the terminal of a MAC machine.

After having the desired user interface, After having the desired user interface, I proceeded to create the necessary functionality so that the project can read .txt files and I made use of a `for()` loop to be able to read line by line of the file.

Then I proceeded to create the files and the functionality to be able to separate the data and information of each line that we find in the .txt file. This functionality can be found in the files of the `utils` folder.

After having the data, the separation of strings and the necessary information, I proceeded to create the main functionality, which allows us to calculate the total salary to be paid to the employee. This can be found in the `salary-calculator.js` file in the `scripts` folder.
