const config = {
    // API and Base URLs
    baseURL: import.meta.env.VITE_BASE_URL || window.location.origin,
    apiURL: import.meta.env.VITE_API_URL || `${window.location.origin}/api`,
    
    // Social & Contact
    whatsappNumber: "5491123456789", // Reemplazar con el real
    instagramURL: "https://www.instagram.com/inflableslostreshermanos",
    facebookURL: "https://www.facebook.com/inflableslostreshermanos",
    
    // Company Info
    companyName: "Inflables Los Tres Hermanos",
    email: "contacto@inflableslostreshermanos.com.ar",
};

export default config;
