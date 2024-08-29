"use client"
import React, { useState } from 'react';
import styles from './contact.module.scss';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>HAVE A QUESTION?</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Your Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="example@example.com"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Your Email </label>
                    <textarea
                                               className={styles.input}
                        placeholder="your text"
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;
