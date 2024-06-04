# Nicklas' Qonto Skills Test

## Application overview

### Architecture

The architecture is a simple structure built on the pages/component structure that is prevelant in especialy the
React community. The general idea is that pages encapsulate larger logic that is related to the overall scope the user is in and components are general things that are separated from specific values and instead reusable.

This means that pages are where data is fetched, permissions etc would be calculated and treated and this data then fed to components that are needed to display the data.

When building an application on these principles, it is important to try and make components as dumb as possible to make them reusable and leave all the scope specific logic and data in the page itself. An example of this is the `Transactions` page. Here we've defined the columns and we feed the data to the table which has very little specific knowledge about the data itself and is fed the columns that define the sortable logic etc.

This greatly improves extensibility as an example. While I took the decision to make the table and sub components as generic as possible, it hasn't been entirely accomplished and could be improved by potentially also extracting the sorting logic into the columns object to allow sorting in whatever way without having to extend the table component.

The application is connected using `React Router` and is simply a group of routes that link the various pages, allowing the user to navigate using the side menu.

### Routing

`/` - The basic index route showing the home page
`/transactions/:transactionId?` - The History page with an optional parameter that allows to link to a specific transaction
`/cards` - Simple Cards route to display the cards page.

### Testing Strategy

Considering the limited time, the strategy for testing was to test core functionality centered around the `Table` and `Transactions` page. While it's important to try and be as thorough in testing as possible, focusing on core functionality first allows you to ensure the user experience after which testing can be expanded to things such as visual components.

### Work breakdown

I started out by trying to scope out the different pages, reusable components and variables. Beginning work by setting up the basic structure for routing, and layout of the page. After completing this, I built the simple pages first and then tackled the Transaction page aiming to build the table first and then the sidebar. During the process I went back and forth to different pages and tried to extract values to variables whenever it made sense.

### Alternatives

**useSort hook**: I briefly considered extracting all the sorting logic into a hook that would allow me to further remove complexity from the table component but opted out of it given the scope of the application versus the time spent.

**Generic Table**: I spent some time implementing as generic a table as possible but ultimately decided to "hardcode" the type of Transactions into the `Table.tsx` due to the complexity of the typings and sorting when dealing with a truly generic table structure. Given more time, I would have liked to continue this to allow for easily extensibility.

**Semantic table**: I opted out of a semantic table due to the constraints when working with a very custom styling and the `table` html component.

**SASS (Pre-processors)**: I started out considering using a pre-processor such as SASS but ultimately chose not to given the size of the application and the lack of need for more complex features of SASS.

**Automatically generated types**: Hardcoding types is always a pain because there is the chance that there are changes down the line, or you make a mistake when writing the types. This application is quite small with few types so it is not an issue but in a larger application I would likely have opted to use React Query and OpenAI schemas to generate the typings for the API calls.

### Future possibilities

#### **What kind of improvements would you have implemented if you had more time?**

**Variables** Given more time I would have done a better job extracting certain reused values across the application into variables, especially in the styling.

**Table**: The table can be improved to achieve a completely generic table that allows for passing in a simple structure and column set with sorting, cell type and similar built in allowing for very fast and very easy setup of new tables.

#### How do you think your work would scale?

I would say that with small improvements the application is quite scalable. With the generic table, api hook and reusable components the code is extendible, maintainable and well typed.

## Feedback questions

1. **How much time did you spend on this exercise?**<br>5-6 hours (Unfortunately I was hit by internet outage quite frequently which made it impossible to sit down and have prolonged sessions)
2. **How proud are you of your work?**<br>I'd say I am fairly proud and happy.
3. **How would you improve the skills test?**<br>I would likely trim the exercise to simply be a front page and the history page by removing the cards page. Perhaps it would have been an interesting exercise as well to work with pagination. I would also add some more guidelines to the Figma. While it is Figma and most information is readily available, you get some weird scenarios where it can be a bit difficult to deduce exactly what the spacing is or where one component begins and another ends.
