/*
Which among these will print all the contacts in the contact_list? (Multiple)

a) <% for ( let i of contact_list ) { %>
        <%= i.name %>
        <%= i.number %>
    <% } %>

 b) <% for { let i of contacts } { %>
        <%= i.name %>
        <%= i.number %>
    <% } %>

 c) <% for (var i =0; i< contactlength ; i++) { %>                 
       <%= contact[i].name %>
     <%= contact[i].phone %
    <% } %>


 d) <% for (var i =0; i< contact_list.length ; i++) { %> 

           <%= contact_list[i].name %>
         <%= contact_list[i].phone %>
    <% } %>

 e) None of the Above

1. a                            // Correct
2. b
3. c
4. d                            // Correct
5. e
*/