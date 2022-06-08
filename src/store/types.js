export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_CLEAR = 'LOGIN_CLEAR'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const AUTH_SET_USERNAME = 'AUTH_SET_USERNAME'
export const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
export const AUTH_REMOVE_TOKEN = 'AUTH_REMOVE_TOKEN'
export const AUTH_REMOVE_USERNAME = 'AUTH_REMOVE_USERNAME'
export const AUTH_RESET_STATE = 'AUTH_RESET_STATE'

export const UPDATE_BALANCES_BEGIN = 'UPDATE_BALANCES_BEGIN'
export const UPDATE_BALANCES_SUCCESS = 'UPDATE_BALANCES_SUCCESS'
export const UPDATE_BALANCES_FAILURE = 'UPDATE_BALANCES_FAILURE'
export const UPDATE_CREDITS_BEGIN = 'UPDATE_CREDITS_BEGIN'
export const UPDATE_CREDITS_SUCCESS = 'UPDATE_CREDITS_SUCCESS'
export const UPDATE_CREDITS_FAILURE = 'UPDATE_CREDITS_FAILURE'
export const UPDATE_DEBITS_BEGIN = 'UPDATE_DEBITS_BEGIN'
export const UPDATE_DEBITS_SUCCESS = 'UPDATE_DEBITS_SUCCESS'
export const UPDATE_DEBITS_FAILURE = 'UPDATE_DEBITS_FAILURE'
export const SET_BALANCES = 'SET_BALANCES'
export const SET_CREDITS = 'SET_CREDITS'
export const SET_DEBITS = 'SET_DEBITS'
export const SET_PROFILE = 'SET_PROFILE'
export const ACCOUNT_SET_INITIALIZED = 'ACCOUNT_SET_INITIALIZED'
export const ACCOUNT_RESET_STATE = 'ACCOUNT_RESET_STATE'

export const FUNDING_DEPOSIT_FAILURE = 'FUNDING_DEPOSIT_FAILURE'
export const FUNDING_DEPOSIT_LOADED = 'FUNDING_DEPOSIT_LOADED'
export const FUNDING_DEPOSIT_CREATED = 'FUNDING_DEPOSIT_CREATED'
export const FUNDING_DEPOSIT_LIST_LOADED = 'FUNDING_DEPOSIT_LIST_LOADED'
export const FUNDING_WITHDRAWAL_CREATED = 'FUNDING_WITHDRAWAL_CREATED'
export const FUNDING_TRANSFER_CREATED = 'FUNDING_TRANSFER_CREATED'
export const FUNDING_TRANSFER_LOADED = 'FUNDING_TRANSFER_LOADED'
export const FUNDING_TRANSFER_FAILURE = 'FUNDING_TRANSFER_FAILURE'
export const FUNDING_TRANSFER_LIST_LOADED = 'FUNDING_TRANSFER_LIST_LOADED'
export const FUNDING_RESET_STATE = 'FUNDING_RESET_STATE'

export const NOTIFICATION_ADD = 'NOTIFICATION_ADD'
export const NOTIFICATION_RESET_STATE = 'NOTIFICATION_RESET_STATE'

export const PASSWORD_EMAIL_BEGIN = 'PASSWORD_EMAIL_BEGIN'
export const PASSWORD_EMAIL_CLEAR = 'PASSWORD_EMAIL_CLEAR'
export const PASSWORD_EMAIL_FAILURE = 'PASSWORD_EMAIL_FAILURE'
export const PASSWORD_EMAIL_SUCCESS = 'PASSWORD_EMAIL_SUCCESS'
export const PASSWORD_RESET_BEGIN = 'PASSWORD_RESET_BEGIN'
export const PASSWORD_RESET_CLEAR = 'PASSWORD_RESET_CLEAR'
export const PASSWORD_RESET_FAILURE = 'PASSWORD_RESET_FAILURE'
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS'

export const ACTIVATION_BEGIN = 'ACTIVATION_BEGIN'
export const ACTIVATION_CLEAR = 'ACTIVATION_CLEAR'
export const ACTIVATION_FAILURE = 'ACTIVATION_FAILURE'
export const ACTIVATION_SUCCESS = 'ACTIVATION_SUCCESS'
export const REGISTRATION_BEGIN = 'REGISTRATION_BEGIN'
export const REGISTRATION_CLEAR = 'REGISTRATION_CLEAR'
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'

export const STORE_INITIALIZE = 'STORE_INITIALIZE'
export const STORE_COLLECTION_SET = 'STORE_COLLECTION_SET'
export const STORE_COLLECTION_SETUP_SUCCESS = 'STORE_COLLECTION_SETUP_SUCCESS'
export const STORE_COLLECTION_SETUP_FAILURE = 'STORE_COLLECTION_SETUP_FAILURE'
export const STORE_EDIT_BEGIN = 'STORE_EDIT_BEGIN'
export const STORE_EDIT_SET_NAME = 'STORE_EDIT_SET_NAME'
export const STORE_EDIT_SET_URL = 'STORE_EDIT_SET_URL'
export const STORE_EDIT_SET_WEBHOOK_URL = 'STORE_EDIT_SET_WEBHOOK_URL'
export const STORE_EDIT_SET_ACCEPTED_TOKENS = 'STORE_EDIT_SET_ACCEPTED_TOKENS'
export const STORE_EDIT_SET_TOKEN_LIST = 'STORE_EDIT_SET_TOKEN_LIST'
export const STORE_EDIT_SUCCESS = 'STORE_EDIT_SUCCESS'
export const STORE_EDIT_FAILURE = 'STORE_EDIT_FAILURE'
export const STORE_RESET_STATE = 'STORE_RESET_STATE'

export const TOKENLIST_FETCH_COLLECTION = 'TOKENLIST_FETCH_COLLECTION'
export const TOKENLIST_FETCH_SINGLE = 'TOKENLIST_FETCH_SINGLE'
export const TOKENLIST_FETCH_ERROR = 'TOKENLIST_FETCH_ERROR'
export const TOKEN_FETCH_COLLECTION = 'TOKEN_FETCH_COLLECTION'
export const TOKEN_FETCH_SINGLE = 'TOKEN_FETCH_SINGLE'
export const TOKEN_FETCH_ERROR = 'TOKEN_FETCH_ERROR'
export const TOKEN_UPDATE_TRANSFER_COST = 'TOKEN_UPDATE_TRANSFER_COST'
export const TOKEN_SET_ROUTES = 'TOKEN_SET_ROUTES'
export const TOKEN_SEARCH_ERROR = 'TOKEN_SEARCH_ERROR'

export const USER_TOKENLIST_FETCH_COLLECTION = 'USER_TOKENLIST_FETCH_COLLECTION'
export const USER_TOKENLIST_FETCH_SINGLE = 'USER_TOKENLIST_FETCH_SINGLE'
export const USER_TOKENLIST_FETCH_ERROR = 'USER_TOKENLIST_FETCH_ERROR'

export const USER_TOKENLIST_EDIT_BEGIN = 'USER_TOKENLIST_EDIT_BEGIN'
export const USER_TOKENLIST_EDIT_COMPLETE = 'USER_TOKENLIST_EDIT_COMPLETE'
export const USER_TOKENLIST_EDIT_ERROR = 'USER_TOKENLIST_EDIT_ERROR'
export const USER_TOKENLIST_EDIT_SET_NAME = 'USER_TOKENLIST_EDIT_SET_NAME'
export const USER_TOKENLIST_EDIT_SET_DESCRIPTION = 'USER_TOKENLIST_EDIT_SET_DESCRIPTION'
export const USER_TOKENLIST_EDIT_SET_TOKENS = 'USER_TOKENLIST_EDIT_SET_TOKENS'
export const USER_TOKENLIST_EDIT_SUCCESS = 'USER_TOKENLIST_EDIT_SUCCESS'

export const USER_TOKEN_FETCH_COLLECTION = 'USER_TOKEN_FETCH_COLLECTION'
export const USER_TOKEN_FETCH_SINGLE = 'USER_TOKEN_FETCH_SINGLE'
export const USER_TOKEN_FETCH_ERROR = 'USER_TOKEN_FETCH_ERROR'
export const USER_TOKEN_REMOVE_SINGLE = 'USER_TOKEN_REMOVE_SINGLE'

export const CHECKOUT_STORE_SETUP_ERROR = 'CHECKOUT_STORE_SETUP_ERROR'
export const CHECKOUT_STORE_SET_DATA = 'CHECKOUT_STORE_SET_DATA'
export const CHECKOUT_CHARGE_SETUP_ERROR = 'CHECKOUT_CHARGE_SETUP_ERROR'
export const CHECKOUT_CHARGE_SET_DATA = 'CHECKOUT_CHARGE_SET_DATA'
export const CHECKOUT_SET_DATA = 'CHECKOUT_SET_DATA'
export const CHECKOUT_RESET = 'CHECKOUT_RESET'
export const CHECKOUT_SET_PREFERRED_PAYMENT_NETWORK = 'CHECKOUT_SET_PREFERRED_PAYMENT_NETWORK'
export const CHECKOUT_WEBSOCKET_OPEN = 'CHECKOUT_WEBSOCKET_OPEN'
export const CHECKOUT_WEBSOCKET_CLOSE = 'CHECKOUT_WEBSOCKET_CLOSE'
