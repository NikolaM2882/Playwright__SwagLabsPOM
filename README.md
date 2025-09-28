
# Playwright – SwagLabs POM

## **Features**
- Automated UI testing for Swag Labs application  
- Page Object Model (POM) design pattern  
- Cross-browser testing (Chromium, Firefox, WebKit)  
- Easy to extend and maintain  
- Screenshots, videos, and trace reports on test failures  

## **Project Structure**
```
Playwright__SwagLabsPOM/
├── pages/                    # Page object classes
├── tests/                    # Test specifications
├── test-results/             # Test run reports (screenshots, videos, traces)
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## **Technologies Used**
- [Playwright](https://playwright.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- Node.js  
- Git & GitHub  
- Sauce Labs Demo site ([Swag Labs](https://www.saucedemo.com/))  

## **Setup & Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/NikolaM2882/Playwright__SwagLabsPOM.git
   cd Playwright__SwagLabsPOM
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## **Tests Include**
- Login functionality  
- Product listing verification  
- Cross-browser compatibility tests  
- Positive & negative test cases  

Run all tests:
```bash
npx playwright test
```

Run tests for a specific browser:
```bash
npx playwright test --project=firefox
```

Run a specific test:
```bash
npx playwright test --grep "User can log in"
```

## **Reporting**
- Screenshots on test failure  
- Video recordings for test runs  
- Trace reports for debugging  
- HTML test report with `npx playwright show-report`

## **Extending the Framework**
- Add new Page Object classes in `/pages`  
- Add new test files in `/tests`  
- Update configuration in `playwright.config.ts`  
- Integrate additional reporting tools  
- Add CI/CD pipelines for automated test execution  

## **Contributing**
- Fork the repository  
- Create your feature branch:  
  ```bash
  git checkout -b feature/YourFeature
  ```
- Commit your changes:  
  ```bash
  git commit -m "Add new feature"
  ```
- Push to branch:  
  ```bash
  git push origin feature/YourFeature
  ```
- Create a pull request  

## **License**
This project is licensed under the MIT License — see the `LICENSE` file for details.

## **Author**
Nikola M.  
GitHub: [https://github.com/NikolaM2882](https://github.com/NikolaM2882)
