
describe('Book', function(){

    let ISBN;
    const userId = "94bd19e6-6129-4f79-bfe1-3aef1cf2ade9";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkthcmVsbGUuSGF1Y2siLCJwYXNzd29yZCI6Ikp1bmVAMjAyMyIsImlhdCI6MTY4ODM3NTk2OH0.Xzi7x6Aw9qHe1PCFUSVBLnwFV9dIC222xbokmdYa-Gw";

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
                        "isbn": "9781449337711"
                    }
                ]
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(201)

            const isbn = response.body
            ISBN = isbn.books[0].isbn
            cy.log(ISBN)
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

            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        })
    })

    it('Update Book by ISBN', function(){

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

    it.only("Delete Book from User's Collection", function(){

        cy.request({
            method: 'DELETE',
            url: `https://demoqa.com/BookStore/v1/Books?UserId=${userId}`,
            headers:{
                Authorization: `Bearer ${token}` 
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(204)
        })
    })
})