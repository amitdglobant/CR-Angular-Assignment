import { AppPage } from "./app.po";
import { browser, logging } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getElementBycss("app-root .content span").getText()).toEqual(
      "My Task Tracker"
    );
  });

  it("should add task[title='Test title'] in todo", () => {
    
    page.getElementBycss("app-task button").click()
    page.getElementByXpath('//*[@formcontrolname="title"]').sendKeys("Test title")
    page.getElementByXpath('//*[@formcontrolname="description"]').sendKeys("Test desc")
    page.getElementBycss('app-task .save_btn').click()

    var elments = page.getAllElementByCss(".drop-list.todo app-task-card mat-card-title span")
    expect(elments.last().getText()).toEqual("Test title")
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
