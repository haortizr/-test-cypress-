describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        //Lineas nuevas
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ha.ortiz11@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("11225597")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')

        //regitrarse

        cy.visit('https://losestudiantes.co')
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Hanner").click()
        cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Ortiz").click()
        cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ha.ortiz11@uniandes.edu.co").click()
        cy.get('.cajaSignUp').find('[name="idUniversidad"]').select('universidad-de-los-andes')
        cy.get('.cajaSignUp').contains('label','Estudio una maestria').find('input').check()

        cy.get('.cajaSignUp').find('[name="idPrograma"]').select('16')
        cy.get('.cajaSignUp').find('input[name="password"]').click().type("11225597")
        cy.get('.cajaSignUp').find('input[name="acepta"]').check()
        cy.get('.cajaSignUp').contains('Registrarse').click()


        //login ok
        cy.visit('https://losestudiantes.co')
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ha.ortiz11@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("11225597")
        cy.get('.cajaLogIn').contains('Ingresar').click()

        //buscar profesor
        cy.get('.buscador > .Select > .Select-control > #react-select-required_error_checksum--value > .Select-placeholder').click()
        cy.get('.buscador').find('input').type("Mario Linares")

        //selección de profesor y redirección a la pagina del profesor
        cy.get('.buscador').get('#react-select-required_error_checksum--option-0').click()

        //filtro por materia  Estructuras De Datos y Pruebas Automáticas
        cy.get('.materias').contains('label','Estructuras De Datos').find('input').check()
        cy.get('.materias').contains('label','Pruebas Automáticas').find('input').check()


    })
})

