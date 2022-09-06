// Generated by dts-bundle v0.7.3

declare module 'web3-token' {
    import { sign } from 'web3-token/lib/sign/sign';
    import { verify } from 'web3-token/lib/verify/verify';
    const Web3Token: {
        sign: (signer: import("./lib/interfaces").Signer, opts?: string | import("./lib/interfaces").SignOpts) => Promise<string>;
        verify: (token: string, opts?: import("./lib/interfaces").VerifyOpts) => {
            address: string;
            body: import("./lib/interfaces").DecryptedBody;
        };
    };
    export default Web3Token;
    export { sign, verify };
}

declare module 'web3-token/lib/sign/sign' {
    import { Signer, SignOpts } from 'web3-token/lib/interfaces';
    export const sign: (signer: Signer, opts?: string | SignOpts) => Promise<string>;
}

declare module 'web3-token/lib/verify/verify' {
    import { DecryptedBody, VerifyOpts } from 'web3-token/lib/interfaces';
    export const verify: (token: string, opts?: VerifyOpts) => {
        address: string;
        body: DecryptedBody;
    };
}

declare module 'web3-token/lib/interfaces' {
    export type Signer = (msg: string) => Promise<string>;
    export interface SignOpts {
        expires_in?: string | number;
        not_before?: Date;
        expiration_time?: Date;
        statement?: string;
        nonce?: number;
        request_id?: string;
        domain?: string;
        uri?: string;
        chain_id?: number;
    }
    export interface SignBody {
        expiration_time: Date;
        web3_token_version: string;
        issued_at: Date;
        not_before?: Date;
        statement?: string;
        nonce?: number;
        request_id?: string;
        domain?: string;
        uri?: string;
        chain_id?: number;
    }
    export interface DecryptedToken {
        address: string;
        body: any;
    }
    export interface DecrypterResult {
        version: number;
        address: string;
        body: string;
        signature: string;
    }
    export interface VerifyOpts {
        domain?: string;
    }
    export interface DecryptedBody {
        'uri'?: string;
        'web3-token-version': number;
        'chain-id'?: number;
        'nonce'?: number;
        'issued-at': string;
        'expiration-time': string;
        'not-before'?: string;
        'request-id'?: string;
        'statement'?: string;
        'domain'?: string;
    }
    export type MessageSections = (string[])[];
}

