# Basic Investment Calculator

A simple investment calculator built with React.js. Users can input investment details such as initial investment, annual investment, expected return, and duration to calculate yearly growth, interest earned, and total capital.

## Features

- User inputs: **Initial Investment**, **Annual Investment**, **Expected Return**, and **Duration**
- Displays a detailed table with the following columns:
  - **Year**: The current year of investment
  - **Initial Investment**: The cumulative investment at the start of the year
  - **Interest Earned**: Interest earned in the current year based on the expected return rate
  - **Total Interest**: Cumulative interest earned over the duration of the investment
  - **Total Capital**: The sum of the initial investment and total interest for each year

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5 & CSS3

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/investment-calculator.git
   cd investment-calculator
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

## User Inputs

1. **Initial Investment**: The starting amount of investment in the first year.
2. **Annual Investment**: The amount added to the investment at the start of each year.
3. **Expected Return (%)**: The expected annual percentage return on the total investment.
4. **Duration (Years)**: The number of years the investment is held.

## Output Table

The output table will display results based on the input values. The table will have the following columns:

- **Year**: Each year from the start of the investment.
- **Initial Investment**: Total investment value at the start of the year.
- **Interest Earned**: The interest earned for that specific year.
- **Total Interest**: The cumulative interest earned up to that year.
- **Total Capital**: The total value of the investment, including the initial investment and the cumulative interest.

## Example Calculation

If you input:

- **Initial Investment**: $10,000
- **Annual Investment**: $5,000
- **Expected Return**: 5%
- **Duration**: 10 years

The table will display yearly growth, including how much interest is earned each year, the total interest, and the total capital by the end of each year.
