export const selectTransactions = state => state.transactions.transactions;
export const selectLoading = state => state.transactions.isLoading;
export const selectError  = state => state.transactions.error;