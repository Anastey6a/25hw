// Клас Людина
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

// Клас Квартира
class Apartment {
  residents = [];

  addResident(person) {
    this.residents.push(person);
  }
}

// Клас Будинок
class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Максимальна кількість квартир у цьому будинку досягнута.");
    }
  }
}

const person1 = new Person("Іван", "чоловік");
const person2 = new Person("Марія", "жінка");
const person3 = new Person("Петро", "чоловік");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);

const building = new Building(2);

building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment(new Apartment()); 