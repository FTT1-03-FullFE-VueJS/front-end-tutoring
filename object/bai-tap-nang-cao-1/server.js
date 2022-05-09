const Server = {
    saveRegister(account) {
        const accountString = JSON.stringify(account);
        localStorage.setItem('account', accountString);
        const response = {
            success: true,
            status: 201
        }
        return response;
    }
}

export default Server;
