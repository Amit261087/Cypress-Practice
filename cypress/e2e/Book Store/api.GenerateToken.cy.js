describe('API - Book Store', function(){

    let token

    it('Generate Token', function(){

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            body:{
                userName: "Amit261087",
                password: "June@2023"
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

                userName: "Amit261087",
                password: "June@2023"

            }            
        }).then((res)=>{
            cy.log(JSON.stringify(res))

            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')

            expect(res.body).to.equal(true)
        })
    })

    it('User', function(){

        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/User',
            Authorization: `${token}`,
            body:{

                userName: 'Amit261087',
                password: 'June@2023'

            },
            failOnStatusCode: false
        }).then((res)=>{
            cy.log(JSON.stringify(res))

            expect(res.body.message).to.equal('User exists!')
        })
    })
})