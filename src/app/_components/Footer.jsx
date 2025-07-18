import Link from 'next/link';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
                {/* ... (All footer columns converted to JSX here) ... */}
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} BSC CSIT NOTES - Far Western University. All rights reserved.</p>
                <p className="mt-2">Empowering Computer Science Students with Quality Education Resources</p>
            </div>
        </div>
    </footer>
);

export default Footer;