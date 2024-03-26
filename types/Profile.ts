interface Profile {
    id: string;
    created_at: Date;
    email?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    isEditor?: boolean | null;
    isAdmin?: boolean | null;
    isUser?: boolean | null;
    address?: string | null;
    mobile?: number | null;
    orders?: string | null;
  }
  
  export default Profile;
  