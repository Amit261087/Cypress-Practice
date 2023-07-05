const account = require('./api.Account.cy');

describe('Book', function(){

    let ISBN;
    let userId;
    let token;

    before(function(){
        
        userId = account.getUserID();
        token = account.getToken();
        
    })

    after('Delete User by User ID', function(){

        cy.request({
            method: 'DELETE',
            url: `https://demoqa.com/Account/v1/User/${userId}`,
            headers: {
    
                Authorization: `Bearer ${token}`
    
            }
        }).then((response)=>{
    
            cy.log(JSON.stringify(response))
    
            expect(response.status).to.equal(204)
            expect(response.statusText).to.equal('No Content')
        })
    })
    
    it('Get All Books', function(){

        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books'

        }).then((response)=>{

            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(response.headers['content-type']).to.equal('application/json; charset=utf-8')
        })
    })

    it("Add Book in User's Collection", function(){

        const requestISBN = "9781449337711"

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/BookStore/v1/Books',
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{
                userId: userId,
                collectionOfIsbns: [
                    {
                        "isbn": requestISBN
                    }
                ]
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))


            expect(response.status).to.equal(201)

            const isbn = response.body
            ISBN = isbn.books[0].isbn
            cy.log(ISBN)

            expect(requestISBN).to.equal(ISBN)
        })
    })

    it('Get Book by ISBN', function(){

        cy.request({
            method: 'GET',
            url: `https://demoqa.com/BookStore/v1/Book?ISBN=${ISBN}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            cy.log(JSON.stringify(response.body.title))
            cy.log(JSON.stringify(response.body.subTitle))
            cy.log(JSON.stringify(response.body.author))

            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        })
    })

    it.skip('Update Book by ISBN', function(){

        cy.request({
            method: 'PUT',
            url: `https://demoqa.com/BookStore/v1/Book?ISBN=${ISBN}`,
            headers:{
                Authorization: `Bearer ${token}`,
                Accept: "application/json"
            },
            body:{
                userId: userId,
                isbn: ISBN
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        })
    })

    it("Delete Book from User's Collection", function(){

        cy.request({
            method: 'DELETE',
            url: `https://demoqa.com/BookStore/v1/Books?UserId=${userId}`,
            headers:{
                Authorization: `Bearer ${token}` 
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            cy.log(JSON.stringify(response.headers));

            expect(response.status).to.equal(204)
            expect(response.statusText).to.equal('No Content')
            expect(response.isOkStatusCode).to.equal(true)

        })
    })
})