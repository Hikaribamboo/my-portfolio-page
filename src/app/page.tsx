import Profile from "@/components/Profile";
import ProjectList from "@/components/ProjectList";
import ExperienceTree from "@/components/ExperienceTree";
import CertificateList from "@/components/CertificateList";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-24 px-8">
      <section id="profile">
        <Profile />
      </section>
      <section id="projects">
        <ProjectList />
      </section>
      <section id="experience">
        <ExperienceTree />
      </section>
      <section id="certificates">
        <CertificateList />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
}
