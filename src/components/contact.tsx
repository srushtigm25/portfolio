// components/contact.tsx
import Section from "@/components/section";
import { siteConfig } from "@/lib/data";


export default function Contact() {
return (
<Section id="contact" title="Contact">
<p>
Reach me at {" "}
<a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
</p>
</Section>
);
}