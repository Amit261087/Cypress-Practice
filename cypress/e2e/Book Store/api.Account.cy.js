const faker = require('faker');

describe('API - Book Store', function(){

    let token
    let userID
    const password = "June@2023"
    let userName

    it('Create User', function(){

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            body:{

                userName: faker.internet.userName(),
                password: password

            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(201)
            expect(response.statusText).to.equal('Created')

            const userid = response.body
            userID = userid.userID

            const username = response.body
            userName = username.username
            cy.log(userID)
            cy.log(userName)
        })


    })

    it('Generate Token', function(){

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body:{
                userName: `${userName}`,
                password: `${password}`
            }
        }).then((res)=>{
                cy.log(JSON.stringify(res))

                expect(res.status).to.equal(200)
                expect(res.statusText).to.equal('OK')
                expect(res.body.status).to.equal('Success')

                const resToken = res.body
                token = resToken.token

                cy.log(token)
            })
    })
    
    it('Authorized', function(){
        
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            body:{

                userName: `${userName}`,
                password: `${password}`

            }   
        }).then((res)=>{
            cy.log(JSON.stringify(res))

            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')

            expect(res.body).to.equal(true)
        })
    })

    it('Get User by User ID', function(){

        cy.request({
            method: 'POST',
            url: `https://bookstore.toolsqa.com/Account/v1/User/${userID}`,
            headers:{
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            },
            body:{

                userName: `${userName}`,
                password: `${password}`

            },
        }).then((response)=>{
            cy.log(JSON.stringify(response))

            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')

            cy.log(response.body.userID)
            cy.log(response.body.userName)

        })
    })
})