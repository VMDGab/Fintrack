export interface TransactionDTO {
        transactionId: string,
        description: string,
        amount: string,
        type: string,
        bankAccount: string,
        card: string,
        installment: boolean,
        numOfInstallment: number,
        essential: boolean,
        status: string,
        dueDate: string,
        paymentDate: string,
        observation: string,
        category: {
            category_id: string,
            title: string,
            essential: boolean
        },
        user: {
            user_id: string,
            username: string,
            email: string,
            password: string
        },
        paymentMethod: {
            payment_method_id: string,
            title: string
        }
    }