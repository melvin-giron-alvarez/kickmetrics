import React, {useState, useEffect } from 'react'
import { auth, db, createUserWithEmailAndPassword, setDoc, signInWithEmailAndPassword, doc } from '../firebase';
import { motion } from 'framer-motion'


const LoginSignup = ({ isLogin, setIsLogin }) => {


    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signingUP = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const ref = doc(db, 'users', user.uid)
            await setDoc(ref, { 
                firstName: first,
                lastName: last
            })
            window.location.href = '/homepage';
        } catch (error) {
            alert('Uh Oh!: ' + error.message);
        }
        setFirst('');
        setLast('');
        setEmail('');
        setPassword('');
    };


    const loginingIn = async (e) => {
        e.preventDefault();
        try {
            const userLogged = await signInWithEmailAndPassword(auth, email, password);
            console.log(userLogged);
            console.log('logged innnnn');
            window.location.href = '/homepage';
        } catch(error) {
            console.log('loginnnn failed: ', error.code, error.message);
            alert('Uh Oh!: ' + error.message)
        }
        setEmail('');
        setPassword('');
    }


  return (
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: -30, repeat: Infinity }}
    transition={{ ease: "easeOut", duration: 2, repeat: Infinity, repeatType: "reverse" }}
    id='login' className=' w-[80%] md:w-[480px] z-[10] lg:w-[33%] bg-dimwhite py-8 px-10 absolute top-[65%] left-[10%] sm:top-[115%] md:left-[10%] lg:top-[30%] lg:left-16 overflow-hidden'>
        <div className='flex w-full mx-auto roboto-medium text-black justify-evenly text-[1em] sm:text-[2em] pb-[6%]'>
            <h1 onClick={() => setIsLogin(true)} className={`tracking-tighter py-[1%] px-[6%] cursor-pointer`}>LOG IN</h1>
            <p>|</p>
            <h1 onClick={() => setIsLogin(false)} className={`tracking-tighter py-[1%] px-[6%] cursor-pointer`}>SIGN UP</h1>
        </div>
        {!isLogin ?         
            (
            <>
            <form onSubmit={signingUP} className={`pr-5 ${!isLogin ? `animate-slideLeft` : `animate-slideRight`}`}>
                <div className='flex flex-wrap w-full justify-between sm:py-[6%]'>
                    <div className='block w-full py-[10%] sm:py-0 sm:w-[46%] roboto-medium'>
                        <p className='tracking-normal text-grey text-[1em] pb-[2%] sm:pb-[4%]'>FIRST NAME*</p>
                        <input value={first}
                                type='text'
                                placeholder='Enter First Name'
                                onChange={(e) => setFirst(e.target.value)}
                                className='home w-full outline-none text-black tracking-tight py-[1%] sm:py-[2%] border-b-[1px] border-grey bg-[transparent]'
                                required />
                    </div>
                    <div className='block w-full py-[10%] sm:py-0 sm:w-[46%] roboto-medium'>
                        <p className='tracking-normal text-grey text-[1em] pb-[2%] sm:pb-[4%]'>LAST NAME*</p>
                        <input value={last}
                                type='text'
                                placeholder='Enter Last Name'
                                onChange={(e) => setLast(e.target.value)}
                                className='home w-full outline-none text-black tracking-tight py-[1%] sm:py-[2%] border-b-[1px] border-grey bg-[transparent]' 
                                required />
                    </div>
                </div>

                <div className='block w-full roboto-medium py-[10%] sm:py-[6%]'>
                    <p className='tracking-normal text-grey text-[1em] pb-[2%]'>EMAIL*</p>
                    <input value={email}
                            type='email'
                            placeholder='Enter Email'
                            onChange={(e) => setEmail(e.target.value)} 
                            className='home w-full outline-none text-black tracking-tight py-[1%] border-b-[1px] border-grey bg-[transparent]'
                            required />
                </div>

                <div className='block w-full roboto-medium py-[10%] sm:py-[6%]'>
                    <p className='tracking-normal text-grey text-[1em] pb-[2%]'>PASSWORD*</p>
                    <input value={password}
                            type='password' 
                            placeholder='Enter Password' 
                            onChange={(e) => setPassword(e.target.value)}
                            className='home w-full outline-none text-black tracking-tight py-[1%] border-b-[1px] border-grey bg-[transparent]'
                            required />
                </div>
                <div className='flex justify-evenly py-4'>
                    <button className={`w-auto text-grey hover:text-black roboto-medium text-[1em] px-10 py-3 sm:px-16 border-[1px] `} type='submit' >SUBMIT</button>
                </div>
            </form>
            </>
        ) : (
            <>
            <form onSubmit={loginingIn}  className={`roboto-regular pr-5 ${!isLogin ? `animate-slideLeft` : `animate-slideRight`}`}>
                <div className='block w-full roboto-medium py-[10%] sm:py-[6%]'>
                    <p className='tracking-normal text-grey text-[1em] pb-[2%]'>EMAIL*</p>
                    <input value={email}
                            type='email'
                            placeholder='Enter Email'
                            onChange={(e) => setEmail(e.target.value)} 
                            className='home w-full outline-none text-black tracking-tight py-[1%] border-b-[1px] border-grey bg-[transparent]'
                            required />
                </div>
                
                <div className='block w-full roboto-medium py-[10%] sm:py-[6%]'>
                    <p className='tracking-normal text-grey text-[1em] pb-[2%]'>PASSWORD*</p>
                    <input value={password}
                            type='password' 
                            placeholder='Enter Password' 
                            onChange={(e) => setPassword(e.target.value)}
                            className='home w-full outline-none text-black tracking-tight py-[1%] border-b-[1px] border-grey bg-[transparent]'
                            required />
                </div>
                <div className='flex justify-evenly py-4'>
                    <button className={`w-auto text-grey hover:text-black roboto-medium text-[1em] px-10 py-3 sm:px-16 border-[1px] `} type='submit' >SUBMIT</button>
                </div>
            </form>
            </>
        )}
    </motion.div>
  )
}

export default LoginSignup