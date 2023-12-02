// filename: complexCode.js

/*
   This code is a complex implementation of a contact management system.
   It provides functionalities like adding contacts, searching contacts,
   deleting contacts, and displaying all contacts. The code includes
   object-oriented programming, array manipulation, and advanced data
   structures for efficient searching and organization of the contacts.
*/

class Contact {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}

class ContactManagementSystem {
  constructor() {
    this.contacts = [];
  }

  addContact(firstName, lastName, email, phone) {
    const newContact = new Contact(firstName, lastName, email, phone);
    this.contacts.push(newContact);
  }

  deleteContact(email) {
    const index = this.contacts.findIndex((contact) => contact.email === email);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  searchContacts(keyword) {
    const filteredContacts = this.contacts.filter((contact) =>
      this.filterContact(contact, keyword)
    );

    if (filteredContacts.length > 0) {
      console.log("Search results:");
      filteredContacts.forEach((contact) => this.displayContact(contact));
    } else {
      console.log("No matching contacts found.");
    }
  }

  filterContact(contact, keyword) {
    const values = Object.values(contact);
    for (let i = 0; i < values.length; i++) {
      if (values[i].toString().toLowerCase().includes(keyword.toLowerCase())) {
        return true;
      }
    }
    return false;
  }

  displayContact(contact) {
    console.log("------------------------------");
    console.log("Name:", contact.firstName, contact.lastName);
    console.log("Email:", contact.email);
    console.log("Phone:", contact.phone);
    console.log("------------------------------");
  }

  displayAllContacts() {
    if (this.contacts.length > 0) {
      console.log("All contacts:");
      this.contacts.forEach((contact) => this.displayContact(contact));
    } else {
      console.log("No contacts found.");
    }
  }
}

// Creating an instance of ContactManagementSystem
const cms = new ContactManagementSystem();

// Adding contacts
cms.addContact("John", "Doe", "john@example.com", "1234567890");
cms.addContact("Jane", "Doe", "jane@example.com", "9876543210");
cms.addContact("Alex", "Smith", "alex@example.com", "5551112222");

// Deleting a contact
cms.deleteContact("jane@example.com");

// Searching contacts
cms.searchContacts("Doe");

// Displaying all contacts
cms.displayAllContacts();