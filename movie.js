// ===== Data =====
const bookings = [
  { movie: "Interstellar", tickets: 3, pricePerTicket: 250 },
  { movie: "Inception", tickets: 6, pricePerTicket: 200 },
  { movie: "The Matrix", tickets: 2, pricePerTicket: 300 },
];

// ===== Requirement 1: Function Declaration =====

// Calling before declaration (Hoisting)
console.log(calculateTotal(250, 3));

// This works because function declarations are hoisted.

function calculateTotal(price, tickets) {
  return price * tickets;
}

// ===== Requirement 2: Function Expression =====

const applyDiscount = function (total, tickets) {
  if (tickets >= 5) {
    return total * 0.9; // 10% discount
  }
  return total;
};

// ===== Requirement 3: Arrow Function =====

const formatBooking = (movie, tickets, finalTotal) =>
  `${movie} | Tickets: ${tickets} | Final Amount: ₹${finalTotal}`;

// ===== Requirement 4: Loop through bookings =====

for (let i = 0; i < bookings.length; i++) {

  let total = calculateTotal(
    bookings[i].pricePerTicket,
    bookings[i].tickets
  );

  let finalTotal = applyDiscount(
    total,
    bookings[i].tickets
  );

  console.log(
    formatBooking(
      bookings[i].movie,
      bookings[i].tickets,
      finalTotal
    )
  );

  // ===== Requirement 5: Scope Demo =====

  let receiptNote = "Thank you for booking!";
  console.log(receiptNote);
}

// console.log(receiptNote);

// ReferenceError: receiptNote is not defined
// Because let variables are block scoped.

// ===== Requirement 6 (Bonus): Ternary =====

const applyDiscount2 = (total, tickets) =>
  tickets >= 5 ? total * 0.9 : total;