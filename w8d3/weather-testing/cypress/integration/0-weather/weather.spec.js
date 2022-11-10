/// <reference types="cypress" />

function mockLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
        if (latitude && longitude) {
          return cb({ coords: { latitude, longitude } });
        }

        throw err({ code: 1 });
      });
    },
  };
}

describe("User stories for Weather App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can enter a city in the form and view the weather", () => {
    cy.get(".CityForm input").type("Montréal");

    cy.get("button").click();

    cy.get(".CurrentWeather > :nth-child(3) span").should("not.be.empty");
  });

  it("can click on a button and view the weather", () => {
    cy.get(".CityForm input").type("Montréal{enter}");
    cy.get(".CityForm input").type("Toronto{enter}");
    cy.get(".CityForm input").type("Calgary{enter}");
    cy.get(".CityForm input").type("Regina{enter}");

    cy.get(".CityList li:first-of-type > button").should("have.text", "Montréal");
    cy.get(".CityList li:last-of-type > button").should("have.text", "Regina");
  });

  it("can see their local weather on first load", () => {
    cy.intercept(
      {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/*",
      },
      { fixture: "weather" }
    );
    cy.visit("/", mockLocation(45.563904, -73.580544));

    cy.get(".CurrentWeather").should("be.visible");
    cy.get(".CurrentWeather h1").should("contain.text", "Zocca");
    cy.get(".CurrentWeather p:first-of-type").should("contain.text", "25C");
    cy.get(".CurrentWeather p:last-of-type").should("contain.text", "moderate rain");
  });
});
