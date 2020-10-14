# Full stack Weather/Forecast app (.NET Core + Angular)

Simple CRUD full stack web application. The application is fully responsive and it looks good on all devices. The user can create, read, update and delete weather forecasts. Below are listed the technologies and tools used in this project. Also a short user manual.

# Starting the application / Installation

NB!!! You must have NODE.JS installed on your computer.

### Project structure

-backend

-frontend (ClientApp folder)

### Installation

Make sure you are in the right folder!
To run the app, run these commands in TWO SEPARATE terminals from the root folder:

First terminal:

```bash
dotnet run
```

and

Second terminal:

```bash
cd ClientApp
```

```bash
npm i
```

```bash
ng serve
```

# Front end / Angular

Styling:

- CSS
- Angular MATERIAL (Buttons /GRID /ICONS /Toolbar /Inputs /Sidenav /Table /Datepicker /Menu /Progress spinner /Snackbar /90% of the components are styled with material ui)

# User Manual / Functionality

### How to use ?

- Navbar(Logo(link to the home page) and hamburger button(toggle the sidenav))

![image](https://user-images.githubusercontent.com/55087458/95975709-2c9a0b00-0e1f-11eb-8a70-77f735a69145.png)

- Sidenav(Menu, Buttons and Links to all other pages)

![image](https://user-images.githubusercontent.com/55087458/95975827-594e2280-0e1f-11eb-8029-d9721b57f5e0.png)

![image](https://user-images.githubusercontent.com/55087458/96005749-6ed64300-0e45-11eb-9b6c-c198f1c7f2b9.png)

![image](https://user-images.githubusercontent.com/55087458/96005854-8d3c3e80-0e45-11eb-9485-1785bedb22a3.png)

- Home page (Table fetching all the data from the DB and displaying it to the table rows.)

![image](https://user-images.githubusercontent.com/55087458/96006266-fb810100-0e45-11eb-9ade-a936c628f93a.png)

Sort and Filter

![image](https://user-images.githubusercontent.com/55087458/96007000-be693e80-0e46-11eb-981e-64e28ba89977.png)

Paginator(options: how much rows per page and navigation buttons: first, last, next and previous)

![image](https://user-images.githubusercontent.com/55087458/96007591-48190c00-0e47-11eb-8a3e-85761992dd0d.png)

Delete and Edit buttons

![image](https://user-images.githubusercontent.com/55087458/96008005-c675ae00-0e47-11eb-8703-44f51823027a.png)

On delete snackbar pops up

![image](https://user-images.githubusercontent.com/55087458/96008178-f4f38900-0e47-11eb-8106-9b8bc27a4d23.png)

On Edit redirect to a pre-filled form(fetch the data by the forecast ID from the URL and fill the form with it)

![image](https://user-images.githubusercontent.com/55087458/96016107-0beaa900-0e51-11eb-8bfb-213a8719fc1e.png)

On submit return to the table and display the updated data also success snackbar message pops up

![image](https://user-images.githubusercontent.com/55087458/96016274-39375700-0e51-11eb-94d1-d7d7e30744a0.png)

- Add Location

![image](https://user-images.githubusercontent.com/55087458/96008749-8b27af00-0e48-11eb-8b5f-70969bb57fc1.png)

Validations min-max letters(submit button disabled)

![image](https://user-images.githubusercontent.com/55087458/96009091-ea85bf00-0e48-11eb-88f4-9b367b7ea157.png)

![image](https://user-images.githubusercontent.com/55087458/96009184-06896080-0e49-11eb-9c12-464b793cf89e.png)

Error handler (error message from the backend displayed with snackbar)

![image](https://user-images.githubusercontent.com/55087458/96009411-4c462900-0e49-11eb-8f5b-205baff3c971.png)

Success message and clean form(when new city is submited)

![image](https://user-images.githubusercontent.com/55087458/96009607-87e0f300-0e49-11eb-8ea1-398ecdb74abd.png)

- Add Forecast

![image](https://user-images.githubusercontent.com/55087458/96009760-b5c63780-0e49-11eb-8a87-ed246f0847be.png)

Validations(submit button disabled)

![image](https://user-images.githubusercontent.com/55087458/96012336-af858a80-0e4c-11eb-9257-53487d2cf0b3.png)

![image](https://user-images.githubusercontent.com/55087458/96014367-f7a5ac80-0e4e-11eb-8333-c0a319332695.png)

Datepicker

![image](https://user-images.githubusercontent.com/55087458/96014498-22900080-0e4f-11eb-9443-1fe0b540eecd.png)

Link to Add Location

![image](https://user-images.githubusercontent.com/55087458/96014638-47847380-0e4f-11eb-9e3f-cd5b8a3d7ab3.png)

Success snackbar message and clean form(when form is submited)

![image](https://user-images.githubusercontent.com/55087458/96014805-7995d580-0e4f-11eb-8132-d72687c3fdfe.png)

Error handler (error message from the backend displayed with snackbar)

![image](https://user-images.githubusercontent.com/55087458/96014901-9500e080-0e4f-11eb-9e1a-8247c12e3b2c.png)

- Forecast card

Initially displays mock data

![image](https://user-images.githubusercontent.com/55087458/96016624-9fbc7500-0e51-11eb-9fc5-bf599a9a36fe.png)

When existing forecast is selected, card for this forecast is displayed.
Wind and rain are fliped every 4 seconds.
Appropriate wheather icon is displayed according the temperature and rain percentage.

![image](https://user-images.githubusercontent.com/55087458/96017418-aa2b3e80-0e52-11eb-9a0f-6dfc1a017e87.png)

![image](https://user-images.githubusercontent.com/55087458/96018099-83b9d300-0e53-11eb-9253-5271d8adfabc.png)

![image](https://user-images.githubusercontent.com/55087458/96018312-c2e82400-0e53-11eb-97f2-3dd6f2690fe6.png)

Error handler (error message from the backend displayed with snackbar)

![image](https://user-images.githubusercontent.com/55087458/96016973-15284580-0e52-11eb-97e1-8e426f5ceb19.png)

- Wheather chart

![image](https://user-images.githubusercontent.com/55087458/96019384-2030a500-0e55-11eb-8dc2-18cd357f66f1.png)

![image](https://user-images.githubusercontent.com/55087458/96019664-84536900-0e55-11eb-9fe5-3ed8ed08b02d.png)
