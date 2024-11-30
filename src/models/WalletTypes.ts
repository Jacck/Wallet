export interface DigitalID {
  id: string;
  type: 'nationalID' | 'drivingLicense' | 'healthCard';
  issuingCountry: string;
  issueDate: string;
  expiryDate: string;
  personalInfo: PersonalInfo;
  verificationStatus: 'valid' | 'expired' | 'revoked';
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  address: Address;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Document {
  id: string;
  type: string;
  issuer: string;
  issuedAt: string;
  expiresAt: string;
  data: any;
  verificationProof: string;
}

export interface PaymentMethod {
  id: string;
  type: 'creditCard' | 'bankAccount' | 'digitalCurrency';
  provider: string;
  lastUsed: string;
  status: 'active' | 'inactive';
}

export interface WalletState {
  digitalIDs: DigitalID[];
  documents: Document[];
  paymentMethods: PaymentMethod[];
  settings: WalletSettings;
}

export interface WalletSettings {
  biometricEnabled: boolean;
  autoLockTimeout: number;
  preferredLanguage: string;
  notificationsEnabled: boolean;
}