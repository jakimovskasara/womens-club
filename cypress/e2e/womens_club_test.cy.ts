/// <reference types="cypress" />

describe('E2E Test', () => {
  it('should navigate to the Events page and check the events', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');

    // Click the 'Events' link
    cy.get('.flex-1 > :nth-child(4)').click();

    // Check the URL to ensure it includes '/events'
    cy.url().should('include', '/events');

    // Perform other checks like checking for the presence of specific text
    cy.contains('Upcoming events').should('be.visible');

    // Check for the first event - Educational event
    cy.contains('Educational event - Breastfeeding Workshop').should('be.visible');
    cy.contains('Korner Coworking & Event space').should('be.visible');
    cy.contains('6pm - 7:00pm').should('be.visible');
    
    // Check for the second event - Entertainment event
    cy.contains('Entertainment event - Mamma Yoga').should('be.visible');
    cy.contains('Yoga Vibe East').should('be.visible');
    cy.contains('6pm - 7:20pm').should('be.visible');

    // Check for the third event - Networking event
    cy.contains('Networking event - DIY Mocktails').should('be.visible');
    cy.contains('Cafe 1920').should('be.visible');
    cy.contains('6pm - 8pm').should('be.visible');

    // Check for the 'Load more' button
    cy.contains('button', 'See more').should('be.visible');
  });
  


  it('should navigate to the About Us page and check contact info and form', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');

    // Click the 'About us' link
    cy.get('.flex-1 > :nth-child(3) > a').click()

    // Check for About us text and if url contains '/about'
    cy.contains('Mamma Buddy - the best place for all expecting mothers').should('be.visible')
    cy.contains('Read more about us and ask your questions! We are here to help!').should('be.visible')
    cy.url().should('include', '/about');

    cy.contains('button', 'Contact Info').click();
    cy.contains('Find us here:').should('be.visible')
    cy.contains('Instagram:').should('be.visible')
    cy.contains('Facebook:').should('be.visible')
    cy.contains('E-mail:').should('be.visible')

    // Checks Contact Form
    cy.contains('button', 'Contact Form').click()

    // Click the dropdown to reveal the options
    cy.get('#type').click();
    
    // Select an option from the dropdown
    cy.get('[role="option"]').contains('Membership').click();

    // Fill in the email address
    cy.get('#email').type('user@example.com');

    // Fill in the message
    cy.get('#message-2').type('This is a test message');

    // Submit the form
    cy.get('form').submit();

    cy.get('#radix-\\:rn\\:').click(); // Corrected by escaping the colon and adding a semicolon
    cy.get('.pb-4').contains('Yes. It adheres to the WAI-ARIA design pattern.'); // Added a semicolon for proper JavaScript syntax
    
    cy.get('#radix-\\:rr\\:').click()
    cy.get('.pb-4').contains('Yes. It adheres to the WAI-ARIA design pattern.')

    cy.get('#radix-\\:rv\\:').click()
    cy.get('.pb-4').contains('Yes. It adheres to the WAI-ARIA design pattern.')
  });



  it('should navigate to the registration page and successfully sign up', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');
    cy.get('a > .text-violet11').click();
    cy.url().should('include', '/register');
    cy.get('#\\:rh\\:-form-item').type('batelubo@gmail.com');
    cy.get('#\\:rj\\:-form-item').type('Lyubaka');
    cy.get('#\\:rl\\:-form-item').type('Gigov');
    cy.get('#\\:rn\\:-form-item > .h-9').type('IamBatman');
    cy.get('#\\:rp\\:-form-item > .h-9').type('IamBatman');    
    cy.get('#terms-checkbox').click();
    cy.get('form.w-full > .inline-flex').click();
    cy.get('form').submit();    
  });

  it('should navigate to the registration page and fail to sign up', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');
    cy.get('a > .text-violet11').click()
    cy.url().should('include', '/register')
    cy.get('#\\:rh\\:-form-item').type('batelubo@gmail.com')
    cy.get('#\\:rj\\:-form-item').type('Lyubaka')
    cy.get('#\\:rl\\:-form-item').type('Gigov')
    cy.get('#\\:rn\\:-form-item > .h-9').type('IamBatman69')
    cy.get('#\\:rp\\:-form-item > .h-9').type('IamBatman')
    cy.get('#terms-checkbox').click()
    cy.get('form.w-full > .inline-flex').click()
    cy.get('form').submit();
    cy.contains('Passwords do not match')
  });

  it('should navigate to the registration page, not write input in all fields and fail to sign up', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');
    cy.get('a > .text-violet11').click()
    cy.url().should('include', '/register')
    cy.get('#\\:rj\\:-form-item').type('Lyubaka')
    cy.get('#terms-checkbox').click()
    cy.get('form.w-full > .inline-flex').click()

    // Ensure "Last name" field, which is required and was left blank, has a validation message
    cy.get('form.w-full > :nth-child(1) > .space-y-2 > :nth-child(2)').should('contain', 'Required');
    cy.url().should('include', '/register'); // Site hasn't changed
  });

  it('should navigate to the blog page and check visibility of each title and click each Learn More button', () => {
    // Visit the home page
    cy.visit('http://localhost:5173/');
    cy.get('.flex-1 > :nth-child(5)').click()
    cy.url().should('include', '/blog')

    // First Blog Post
    cy.get(':nth-child(2) > .flex-wrap > .min-w-300px > .flex-col > .font-semibold').should('be.visible').and('contain', '10 Fun Activities for Pregnant Moms for All Stages of Your Pregnancy');
    cy.get(':nth-child(2) > .flex-wrap > .min-w-300px > .pt-0 > [type="button"] > .inline-flex').click();
    // Simulate ESC click to close pop-up
    cy.get('body').type('{esc}');

    // Second Blog Post
    cy.get(':nth-child(2) > .flex-wrap > .ml-4 > .flex-col > .font-semibold').should('be.visible').and('contain', 'How to make friends when you are a new mum or pregnant');
    cy.get(':nth-child(2) > .flex-wrap > .ml-4 > .pt-0 > [type="button"] > .inline-flex').click();
    cy.get('body').type('{esc}');

    // Third Blog Post
    cy.get(':nth-child(2) > .flex-wrap > .ml-1 > .flex-col > .font-semibold').should('be.visible').and('contain', 'Hobbies While Pregnant: 14 New Low-Energy + Fun Ideas');
    cy.get(':nth-child(2) > .flex-wrap > .ml-1 > .pt-0 > [type="button"] > .inline-flex').click();
    cy.get('body').type('{esc}');

    // Fourth Blog Post
    cy.get(':nth-child(4) > .flex-wrap > .min-w-300px > .flex-col > .font-semibold').should('be.visible').and('contain', 'Women\'s experiences of social support during pregnancy: a qualitative systematic review');
    cy.get(':nth-child(4) > .flex-wrap > .min-w-300px > .pt-0 > [type="button"] > .inline-flex').click();
    cy.get('body').type('{esc}');

    // Fifth Blog Post
    cy.get(':nth-child(4) > .flex-wrap > .ml-4 > .flex-col > .font-semibold').should('be.visible').and('contain', 'The importance of social support in pregnancy and ways to connect with others');
    cy.get(':nth-child(4) > .flex-wrap > .ml-4 > .pt-0 > [type="button"] > .inline-flex').click();
    cy.get('body').type('{esc}');

    // Sixth Blog Post
    cy.get(':nth-child(4) > .flex-wrap > .ml-1 > .flex-col > .font-semibold').should('be.visible').and('contain', 'Navigating Social Events During Pregnancy: A Guide to Enjoying Gatherings');
    cy.get(':nth-child(4) > .flex-wrap > .ml-1 > .pt-0 > [type="button"] > .inline-flex').click();
    cy.get('body').type('{esc}');
  });

    it('should navigate to the login page and sign in', () => {
    // Visit the home page
      cy.visit('http://localhost:5173/');
      cy.get('a > .text-violet11').click()
      cy.url().should('include', '/register')
      cy.get('.text-blue-500').click()
      cy.url().should('include', '/login')
      cy.get('#\\:rr\\:-form-item').type('batelubo@gmail.com');
      cy.get('#\\:rt\\:-form-item > .h-9').type('IamBatman');      
      cy.get('form.w-full > .inline-flex').click()
      cy.get('form').submit();
  });

    it('should navigate to the partners page and check packages', () => {
      // Visit the home page
      cy.visit('http://localhost:5173/');
      cy.get(':nth-child(6) > a').click()
      cy.url().should('include', '/partners')

      cy.get('body').should('contain', 'Partners with ...');
      // Check for other specific texts
      cy.get('body').should('contain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
      cy.get('body').should('contain', 'Pellentesque vel lorem malesuada, faucibus erat sed, fermentum nulla.');
      cy.get('.bg-rose-100').should('contain', 'SPONSORSHIP PACKAGES');

      // Checks for the SILVER Package
      cy.get('body').should('contain', 'Newsletter');
      cy.get('body').should('contain', 'Logo on our website');
      cy.get('body').should('contain', 'Mention in article (without link)');
      cy.get('body').should('contain', 'Merch during events');

      // Checks for the GOLD Package
      cy.get('body').should('contain', 'Newsletter');
      cy.get('body').should('contain', 'Logo on our website');
      cy.get('body').should('contain', 'Link in an article');
      cy.get('body').should('contain', 'Merch during events');
      cy.get('body').should('contain', 'Interactive workshop');

      // Checks for the PLATINUM Package
      cy.get('body').should('contain', 'Newsletter');
      cy.get('body').should('contain', 'Logo on our website');
      cy.get('body').should('contain', 'Whole article for the company');
      cy.get('body').should('contain', 'Exclusive event for the company');
      cy.get('body').should('contain', 'Post in social media');

      // Submit Partnership Request
      cy.get('[type="name"]').type('Chameleon Enterprise OOD')
      cy.get('[type="email"]').type('chameleon123@gmail.com')
      cy.get('.bg-red-400 > .inline-flex').click()
  });
});