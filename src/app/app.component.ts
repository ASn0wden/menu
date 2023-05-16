import { Component } from '@angular/core';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { name: 'Cheese Pizza', category: 'Pizza', price: 9.99 },
    { name: 'Pepperoni Pizza', category: 'Pizza', price: 11.99 },
    { name: 'Pickle Pizza', category: 'Pizza', price: 11.99 },
    { name: 'Margherita Pizza', category: 'Pizza', price: 10.99 },
    { name: 'BBQ Chicken Pizza', category: 'Pizza', price: 14.99 },
    { name: 'Hamburger Pizza', category: 'Pizza', price: 14.99 },
    { name: 'Buffalo Wings', category: 'Appetizers', price: 9.99 },
    { name: 'Honey BBQ Wings', category: 'Appetizers', price: 9.99 },
    { name: 'Lemon Pepper Wings', category: 'Appetizers', price: 9.99 },
    { name: 'Garlic Knots', category: 'Appetizers', price: 4.99 },
    { name: 'Breadsticks', category: 'Appetizers', price: 5.99 },
    { name: 'Cheese Sticks', category: 'Appetizers', price: 5.99 },
    { name: 'Garden Salad', category: 'Appetizers', price: 3.99 },
    { name: 'Greek Salad', category: 'Appetizers', price: 4.99 },
    { name: 'Garlic Knots', category: 'Appetizers', price: 5.99 }

  ];
}
