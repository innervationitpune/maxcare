import {
  Award,
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
} from 'lucide-react';

const About = () => {
  const qualifications = [
    'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
    'MD Anesthesia',
    'FRCA (Fellowship of Royal College of Anaesthetists)',
    'EDIC',
    'FFPMRCA (Fellowship of Faculty of Pain Medicine – UK)',
    'Member of International Association for the Study of Pain (IASP)',
    'Member of British Pain Society',
  ];

  const positions = [
    {
      title: 'Consultant Pain Medicine Specialist',
      organization: 'Royal Berkshire NHS Foundation Trust',
      period: '2022 – Present',
      description:
        'Leading comprehensive pain management services with focus on interventional procedures',
    },
    {
      title: 'Senior Pain Medicine Consultant',
      organization: 'Berkshire Pain Clinic, Reading',
    },
    {
      title: 'Clinical Governance Lead, Pain Department',
      organization: 'Royal Berkshire NHS Foundation Trust',
      period: 'April 2025 – Ongoing',
    },
    {
      title: 'Faculty Tutor in Pain Management',
      period: 'January 2024 – Present',
      description: 'Active involvement in supervising pain training',
    },
    {
      title: 'Research Collaboration',
      organization: 'University of Reading',
      description:
        'Actively involved in research in collaboration with University of Reading',
    },
  ];

  const affiliations = [
    'International Association for the Study of Pain (IASP)',
    'British Pain Society',
    'Royal College of Anaesthetists',
    'Faculty of Pain Medicine',
    'European Pain Federation (EFIC)',
  ];

  const expertise = [
    'Chronic Pain Management',
    'Interventional Pain Procedures',
    'Spinal Injections',
    'Nerve Blocks',
    'Radiofrequency Ablation',
    'Medication Management',
    'Multimodal Pain Treatment',
    'Transitional pain service',
    'Perioperative acute pain management planning for chronic pain patients',
    'Joint denervation procedures',
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-12 sm:mb-16">
          {/* Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#567c8d] mb-4">
              About Dr. Ram Dhotarkar
            </h1>
            <p className="text-lg sm:text-xl text-[#567c8d] mb-6">
              MBBS, MD, FRCA, EDIC, FFPMRCA
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#567c8d] max-w-3xl">
              Specialist in Pain Medicine with extensive experience in interventional
              pain management and comprehensive patient care.
            </p>
          </div>

          {/* Image on the Right */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="rounded-lg w-56 h-56 sm:w-64 sm:h-64 lg:w-[350px] lg:h-[350px] border-2 border-[#567C8D] overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover object-[50%_36%] image-smooth"
                src="photo.jpg"
                alt="Dr. Ram Dhotarkar"
              />
            </div>
          </div>
        </div>

        {/* Professional Bio */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Professional Biography
            </h2>
          </div>

          <div className="prose max-w-none text-[#567c8d] space-y-4 text-sm sm:text-base">
            <>
              Dr. Ram Dhotarkar is a highly experienced Consultant in Pain Management at the Royal Berkshire NHS Foundation Trust, with a private practice spanning Berkshire and South Buckinghamshire. He holds dual accreditation in Anaesthetics and Pain Management, trained in Oxford deanery, and achieved pain fellowship from University College Hospitals and Queens Square, London.
              He runs specialist pain clinics in Reading, Townlands Hospital in Henley, and Shelburne Hospital at High Wycombe. With over a decade of clinical experience in pain management, he is widely respected for delivering optimal, patient-centred care.
              His clinical interests include musculoskeletal and spinal pain, ultrasound-guided pain interventions, spinal procedures, and management of persistent post-surgical pain, particularly after joint replacement surgery. He believes in early pain intervention to prevent chronicity and champions a multidisciplinary approach for the best outcomes.
              He is also a faculty tutor for pain medicine at Royal Berkshire NHS Foundation Trust, actively involved in teaching at regional, national, and international courses. His work includes ongoing research collaboration with international experts and the University of Reading.
            </>
          </div>
        </div>

        {/* Qualifications */}
        <div className="bg-[#F5EFEB] rounded-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Qualifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <span className="text-[#567c8d] text-sm sm:text-base">
                  {qualification}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Positions Held */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Positions Held
            </h2>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="border-l-4 border-[#567c8d] pl-4 sm:pl-6"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#567c8d]">
                  {position.title}
                </h3>
                {position.organization && (
                  <p className="text-[#567c8d] font-medium text-sm sm:text-base">
                    {position.organization}
                  </p>
                )}
                {position.period && (
                  <p className="text-[#567c8d] text-xs sm:text-sm mb-2">
                    {position.period}
                  </p>
                )}
                {position.description && (
                  <p className="text-[#567c8d] text-sm sm:text-base">
                    {position.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Affiliations */}
        <div className="bg-[#F5EFEB] rounded-lg p-6 sm:p-8 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Professional Affiliations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-[#567c8d] mt-1 flex-shrink-0" />
                <span className="text-[#567c8d] text-sm sm:text-base">
                  {affiliation}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-[#F5EFEB] rounded-lg shadow-lg p-6 sm:p-8">
          <div className="flex items-center mb-6">
            <div className="bg-[#567c8d]/10 rounded-full p-3 sm:p-4">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#567c8d]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#567c8d] ml-4">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-[#567c8d]/5 rounded-lg p-4 text-center"
              >
                <span className="text-[#567c8d] font-medium text-sm sm:text-base">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
