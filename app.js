// Check for dark mode preference and apply it
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Generate random colors for NFT backgrounds
function getRandomColor() {
    const colors = [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
        'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Generate SVG patterns for NFT images
function generatePattern(id) {
    const patterns = [
        // Pattern 1: Circles
        `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="10" fill="#fff" fill-opacity="0.2" />
            <circle cx="60" cy="20" r="10" fill="#fff" fill-opacity="0.2" />
            <circle cx="20" cy="60" r="10" fill="#fff" fill-opacity="0.2" />
            <circle cx="60" cy="60" r="10" fill="#fff" fill-opacity="0.2" />
            <circle cx="40" cy="40" r="15" fill="#fff" fill-opacity="0.3" />
        </svg>`,
        // Pattern 2: Grid
        `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="20" height="20" fill="#fff" fill-opacity="0.2" />
            <rect x="40" y="10" width="20" height="20" fill="#fff" fill-opacity="0.3" />
            <rect x="10" y="40" width="20" height="20" fill="#fff" fill-opacity="0.3" />
            <rect x="40" y="40" width="20" height="20" fill="#fff" fill-opacity="0.2" />
        </svg>`,
        // Pattern 3: Lines
        `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="20" x2="80" y2="20" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
            <line x1="0" y1="40" x2="80" y2="40" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
            <line x1="0" y1="60" x2="80" y2="60" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
            <line x1="20" y1="0" x2="20" y2="80" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
            <line x1="40" y1="0" x2="40" y2="80" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
            <line x1="60" y1="0" x2="60" y2="80" stroke="#fff" stroke-width="3" stroke-opacity="0.2" />
        </svg>`,
        // Pattern 4: Triangles
        `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,10 10,70 70,70" fill="#fff" fill-opacity="0.2" />
            <polygon points="20,20 50,20 35,50" fill="#fff" fill-opacity="0.2" />
        </svg>`,
        // Pattern 5: Abstract
        `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,10 Q40,20 70,10 T10,40 T70,70 T10,10" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.3" />
            <circle cx="40" cy="40" r="20" fill="none" stroke="#fff" stroke-width="2" stroke-opacity="0.3" />
        </svg>`
    ];
    return patterns[id % patterns.length];
}

// Sample NFT data
const nfts = [
    { id: 1, name: "Abstract Dreams #001", creator: "Artist_123", price: 0.45, likes: 230, category: "Art" },
    { id: 2, name: "Crypto Punk #042", creator: "CryptoCreator", price: 1.2, likes: 510, category: "Collectibles" },
    { id: 3, name: "Digital Landscape", creator: "VirtualArtist", price: 0.75, likes: 184, category: "Art" },
    { id: 4, name: "Game Character #7", creator: "GameStudio", price: 0.3, likes: 92, category: "Games" },
    { id: 5, name: "Sound Wave #3", creator: "MusicMaker", price: 0.15, likes: 67, category: "Music" },
    { id: 6, name: "Pixel Art Collection", creator: "PixelMaster", price: 0.6, likes: 156, category: "Art" },
    { id: 7, name: "3D Sculpture", creator: "3DArtist", price: 0.9, likes: 201, category: "Art" },
    { id: 8, name: "Rare Item #13", creator: "GameDev", price: 0.25, likes: 83, category: "Games" }
];

// Render NFT cards
function renderNFTs() {
    const nftGrid = document.getElementById('nft-grid');
    nftGrid.innerHTML = '';

    nfts.forEach(nft => {
        const color = getRandomColor();
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-dark-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow nft-card';
        card.innerHTML = `
            <div class="${color} aspect-square relative nft-img">
                <div class="absolute inset-0 flex items-center justify-center">
                    ${generatePattern(nft.id)}
                </div>
                <div class="absolute top-2 right-2 bg-white dark:bg-dark-card rounded-full p-1.5 shadow-md like-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-lg mb-1">${nft.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">By ${nft.creator}</p>
                    </div>
                    <div class="bg-gray-100 dark:bg-gray-800 rounded-lg px-2 py-1">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span class="text-sm font-medium">${nft.likes}</span>
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex justify-between items-center">
                    <div>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Current Price</span>
                        <p class="font-bold text-lg flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                            </svg>
                            ${nft.price} ETH
                        </p>
                    </div>
                    <button class="view-nft bg-primary hover:bg-secondary text-white font-medium py-2 px-3 rounded-lg transition-colors duration-300" data-id="${nft.id}">
                        View
                    </button>
                </div>
            </div>
        `;
        nftGrid.appendChild(card);
    });

    // Add event listeners to "View" buttons
    document.querySelectorAll('.view-nft').forEach(button => {
        button.addEventListener('click', () => {
            const nftId = parseInt(button.getAttribute('data-id'));
            showNFTDetails(nftId);
        });
    });
}

// Show NFT details in modal
function showNFTDetails(id) {
    const nft = nfts.find(n => n.id === id);
    if (!nft) return;

    const color = getRandomColor();
    const modal = document.getElementById('nft-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = nft.name;
    modalContent.innerHTML = `
        <div class="${color} aspect-square rounded-lg mb-4 relative nft-img">
            <div class="absolute inset-0 flex items-center justify-center">
                ${generatePattern(nft.id)}
            </div>
        </div>
        <div class="mb-4">
            <div class="flex justify-between mb-2">
                <span class="text-gray-600 dark:text-gray-400">Creator</span>
                <span class="font-medium">${nft.creator}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-600 dark:text-gray-400">Category</span>
                <span class="font-medium">${nft.category}</span>
            </div>
            <div class="flex justify-between mb-2">
                <span class="text-gray-600 dark:text-gray-400">Likes</span>
                <span class="font-medium">${nft.likes}</span>
            </div>
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <div class="flex justify-between items-center">
                <div>
                    <span class="text-gray-600 dark:text-gray-400 text-sm">Current Price</span>
                    <p class="font-bold text-xl flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 text-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                        </svg>
                        ${nft.price} ETH
                    </p>
                </div>
                <button id="buy-nft" class="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                    Buy Now
                </button>
            </div>
        </div>
        <div>
            <h3 class="font-bold mb-2">Description</h3>
            <p class="text-gray-600 dark:text-gray-400">
                This unique digital collectible was created by ${nft.creator} as part of the ${nft.category} collection. 
                Own this one-of-a-kind NFT and become part of the decentralized digital art movement.
            </p>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('modal-enter');

    // Buy NFT button event
    document.getElementById('buy-nft').addEventListener('click', () => {
        purchaseNFT(nft);
    });
}

// Mock purchase NFT
function purchaseNFT(nft) {
    const modal = document.getElementById('nft-modal');
    const toast = document.getElementById('toast');

    modal.classList.add('hidden');

    // Show toast notification
    toast.textContent = `Successfully purchased ${nft.name} for ${nft.price} ETH!`;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.style.animation = 'slideIn 0.3s forwards';

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.style.animation = '';
    }, 3000);
}

// Close modal when clicking the close button
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('nft-modal').classList.add('hidden');
});

// Close modal when clicking outside the modal content
document.getElementById('nft-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('nft-modal')) {
        document.getElementById('nft-modal').classList.add('hidden');
    }
});

// Wallet connect button event
document.getElementById('wallet-btn').addEventListener('click', function () {
    const btn = this;
    if (btn.textContent === 'Connect Wallet') {
        btn.textContent = 'Wallet Connected';
        btn.classList.add('bg-green-600');
        btn.classList.remove('bg-primary');

        // Show toast notification
        const toast = document.getElementById('toast');
        toast.textContent = 'Wallet connected successfully!';
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.style.animation = 'slideIn 0.3s forwards';

        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.style.animation = '';
        }, 3000);
    } else {
        btn.textContent = 'Connect Wallet';
        btn.classList.remove('bg-green-600');
        btn.classList.add('bg-primary');
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderNFTs();

    // Set up category filter buttons (mock functionality)
    document.querySelectorAll('.mb-8.flex.flex-wrap.gap-3 button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.mb-8.flex.flex-wrap.gap-3 button').forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-dark-card', 'hover:bg-gray-300', 'dark:hover:bg-gray-700');
            });

            // Add active class to clicked button
            button.classList.add('bg-primary', 'text-white');
            button.classList.remove('bg-gray-200', 'dark:bg-dark-card', 'hover:bg-gray-300', 'dark:hover:bg-gray-700');

            // In a real app, we would filter NFTs here based on category
        });
    });
});