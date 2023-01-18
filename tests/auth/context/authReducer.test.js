import { authReducer } from "../../../src/auth/context/authReducer"


describe('Pruebas en authReducer', ()=>{

    

    test('Debe retornar el estado por defecto', () => {  
        const intialState =[{
            logged: false,
            user:{
                id: 1, 
                name: 'Alberto Demo'
            }
        }]

        const newState = authReducer( intialState, {} )
        expect( newState ).toBe( intialState )
    })


    test('Debe de (login) llamar el login autenticar y establecer el user', () => {  
        

        const action ={
            types: '[Auth] login',
            payload: { 
                id:2, 
                name: 'Richard Demo'
            }
        }

        const newState = authReducer( { logged: true } , action )
        expect(newState).toEqual({
            logged:true,
            user: action.payload
        })

    })

    test('Debe de (loggout) borrar el name del usuario y logged en false ',()=>{

        const state = { 
            logged: true,
            user:{
                id:2, 
                name: 'Richard Demo'  
            } 
        }


        const action ={
            types: '[Auth] logout',
        }

        const newState = authReducer( state, action )
        expect( newState ).toEqual( { logged: false })
    })



})