const FREEPIK_API_URL = 'https://api.freepik.com/v1/resources';
const FREEPIK_API_KEY = 'FPSXc065cdb3b1c94c779a5487817a9115ac'; // Replace with your actual API key

export default async function getRandomImage(query: string) {
    try {
        const response = await fetch(
            `${FREEPIK_API_URL}/search?query=${encodeURIComponent(query)}&limit=1`,
            {
                headers: {
                    'Accept-Language': 'en-US',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${FREEPIK_API_KEY}`
                },
            }
        );
        const data = await response.json();
        return data.data[0]?.image?.source?.url || null;
    } catch (error) {
        console.error('Error fetching Freepik image:', error);
        return null;
    }
}