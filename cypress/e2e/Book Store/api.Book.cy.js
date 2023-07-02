describe('Book', function(){

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

    it('All Book', function(){

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/BookStore/v1/Books',
            headers:{
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFtaXQyNjEwODciLCJwYXNzd29yZCI6Ikp1bmVAMjAyMyIsImlhdCI6MTY4ODMxNzc5M30.zllvX3LHmOmuNCgmgGJ1x_bYVhU7U52bti4JI5CBw2A`
            },
            body:{
                userId: "Amit261087",
                collectionOfIsbns: [
                    {
                        "isbn": "9781449337755"
                    },
                    {
                        "isbn": "9781449337765"
                    }
                ]
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(200)
        })
    })
})