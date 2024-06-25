export const COLORS = {
    black: '#2C3135',
    white: '#fff',
    primary: '#E7651C',
    grey: '#F4F4F4',
    yellow: '#FFEBB6'
}

export const FONTS = {
    roboto: 'Roboto-Regular'
}

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Invalid email address';
};

export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])\S{10,}$/;
    if (password.length < 10) {
        return 'Password must be at least 10 characters long';
    }
    return passwordRegex.test(password) ? '' : 'Weak password. Include uppercase, lowercase, numbers, and symbols.';
};