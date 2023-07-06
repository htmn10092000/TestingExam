const fs = require("fs-extra");
const dir = "cypress/reports/html";

if (fs.existsSync(dir)) {
  fs.removeSync(dir);
}
fs.mkdirSync(dir);

const reporter = require("cucumber-html-reporter");
const options = {
  theme: "bootstrap",
  jsonDir: "cypress/cucumber-json",
  output: "cypress/reports/html/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome 113.0.5672.127",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};
reporter.generate(options);
