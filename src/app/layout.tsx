import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-geist-sans",
});

export const metadata: Metadata = {
	title: "Better Next Stack",
	description: "Better Next Stack SAAS Template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={` ${outfit.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
