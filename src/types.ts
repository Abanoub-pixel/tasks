
export interface APIResponse {
    success:    boolean;
    status:     string;
    message:    string;
    data:       Company[];
    pagination: Pagination;
}

export interface Company {
    id:              number;
    name:            Description;
    description:     Description;
    logo:            { [key: string]: string };
    cover_photos:    null;
    social_links:    SocialLinks;
    emails:          Emails;
    hotlines:        Hotlines;
    commercial:      any[];
    review:          number;
    is_lock:         boolean;
    lock_reason:     string;
    owner:           Owner;
    agent:           null;
    packages:        Packages;
    packages_end_at: number;
}

interface Description {
    key:   string;
    value: string;
}

interface Emails {
    sales:       string;
    contact:     string;
    recruitment: string;
}

interface Hotlines {
    founded:           string;
    founders:          string;
    headquarters:      string;
    subsidiaries:      string;
    branches_numbers:  string;
    locations_numbers: string;
}

interface Owner {
    id:             number;
    alternative_id: null;
    name:           string;
    email:          string;
    mobile:         string;
    image:          { [key: string]: string };
    gender:         string;
    birthdate:      string;
    timezone:       string;
    nationality:    null;
    type_id:        number;
    lang_id:        number;
    currency_id:    number;
    address:        Address;
    is_online:      boolean;
    is_blocked:     boolean;
    block_reason:   null;
}
interface Address {
    id:               number;
    latitude:         string;
    longitude:        string;
    state:            string;
    street:           string;
    building:         string;
    intercom:         string;
    floor:            string;
    zipcode:          string;
    detailed_address: string;
    city_id:          CityID;
}

export interface CityID {
    id:         number;
    symbols:    string;
    name:       Description;
    country_id: CountryID;
    is_visible: boolean;
}

export interface CountryID {
    id:               number;
    symbols:          string;
    name:             Description;
    nationality:      Description;
    default_language: DefaultLanguage;
    flag:             { [key: string]: string };
    is_visible:       boolean;
}

export interface DefaultLanguage {
    id:          number;
    symbols:     string;
    name_values: Description;
}

export interface Packages {
    id:             number;
    code:           string;
    subscribe_days: number;
    price:          string;
    name:           Description;
    description:    Description;
    company_type:   CompanyType;
}

export interface CompanyType {
    id:    number;
    key:   string;
    name:  Description;
    icons: Icons;
}

export interface Icons {
    svg: string;
}

export interface SocialLinks {
    YouTube:        string;
    twitter:        string;
    website:        string;
    WhatsApp:       string;
    facebook:       string;
    linkedin:       string;
    snapchat:       string;
    instagram:      string;
    company_mobile: string;
}

export interface Pagination {
    links: Links;
    meta:  Meta;
}

export interface Links {
    first: string;
    prev:  null;
    next:  string;
}

export interface Meta {
    current_page: number;
    from:         number;
    to:           number;
    pages:        number;
    per_page:     string;
    total:        number;
}
