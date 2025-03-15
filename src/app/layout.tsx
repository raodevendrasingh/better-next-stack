import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import QueryProviders from "@/providers/query-provider";
import "./globals.css";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-outfit",
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
					<QueryProviders>{children}</QueryProviders>
				</ThemeProvider>
			</body>
		</html>
	);
}
