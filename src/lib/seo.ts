// Identity for the Bekolenkosi portfolio.
export const NAME = "Thobeka Nkosi";
export const ABOUT_SHORT = "Software engineer with a Life Sciences background in Biochemistry and Physiology, exploring Java, cloud, AI, data, and health technology.";
export const PROFILES = [
  "https://github.com/beko-1enkosi",
  "https://www.linkedin.com/in/thobeka-nkosi-217640293",
  "https://x.com/bekolenkosi_",
  "https://www.instagram.com/bekolenkosi_/",
  "https://discord.com/users/1419406774834036756",
];
export const jsonLd = (data: Record<string, unknown>) => ({
  type: "application/ld+json",
  children: JSON.stringify({ "@context": "https://schema.org", ...data }),
});
