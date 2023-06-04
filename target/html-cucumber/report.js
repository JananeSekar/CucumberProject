$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Simplilearn application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login success scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.LoginStepDefs.i_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});