# This is my solution to the Frontend challenge by Enye


### Purpose

The purpose is to gauge your understanding of working with JSON data with various RESTful APIs. In this challenge, we provide a sample API with a single endpoint and ask you to write some Javascript to request data from the API and transform the response.

### Records API

The provided API below returns a list of profiles with information surrounding e-commerce transaction details.

```bash
https://api.enye.tech/v1/challenge/records

```

API response schema

```json
{
    "records": {
        "profiles": [{
            "FirstName": "",
            "LastName": "",
            "Gender": "",
            "Latitude": "",
            "Longitude": "",
            "CreditCardNumber": "",
            "CreditCardType": "",
            "Email": "",
            "DomainName": "",
            "PhoneNumber": "",
            "MacAddress": "",
            "URL": "",
            "UserName": "",
            "LastLogin": "",
            "PaymentMethod": ""
        }, ...]
    },
    "status": "",
    "size": ""
}
```

### Required Technology

- [React JS](https://reactjs.org/tutorial/tutorial.html)

### Tasks

1. Using the Profiles API, create a UI that presents the information intuitively and beautifully
2. Only 20 profiles **must** be listed on a page, so pagination is needed
3. Your application **must** incorporate two (2) filters to dynamically present the information (i.e. filter by gender, payment method, credit card type, etc.)
4. Your application **must** include a search bar to search for a specific patient
5. Your application front-end **must** be written using ReactJS
6. The application **must** be deployed to the web

### Notes

User experience is very important, so be sure to keep the end-users in mind. The more usable, accessible, intuitive, and beautiful your frontend design the better you will be scored.
