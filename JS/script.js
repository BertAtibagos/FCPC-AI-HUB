const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalCardTitle");
const modalBody = document.getElementById("modalBody");

const aboutContent = document.getElementById("aboutModal");

// Modal data
const modalData = {
    aiCompanion: {
        title: "FCPC AI COMPANION",
        cards: [
            { 
            innerTitle: "Lumina AI Companion", 
            description: "Your personal AI companion for daily tasks, reminders, and casual conversations. Always ready to assist you.", 
            link: "https://app.capabara.ai/dashboard/chat?toolId=cc503704-bc2f-4deb-86f6-556bb19c0535" 
        }
        ]
    },
    teaching: { 
        title: "TEACHING TOOLS", 
        cards: [
            { 
                innerTitle: "SyllaBuilder 1.2", 
                description: "A structured tool that creates a complete, college-level course syllabus based on user-provided details such as course title, code, credit units, academic term, and level. It automatically generates course outcomes, week.", 
                link: "https://app.capabara.ai/dashboard/chat?toolId=69dd6515-be6a-4b48-bfb2-f69a6d8cf682" 
            },
            {
                innerTitle: "THE VENCI APP",
                description: "An interactive training tool where students take on the role of a medical assistant in high-pressure OB-Gyne scenarios such as ER or OR cases.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=9aa25c89-733a-4fad-8676-0f8970052e3f" 
            },
            {
                innerTitle: "Assessment Test Generator",
                description: "A tool for generating multiple-choice questions based on Bloom's Taxonomy for teachers in First City Providential College.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=97ab7847-5c7a-47cd-896e-66b7b15852a0"
            },
            {
                innerTitle: "Grade 12 Marketing Mix Assessment Tool",
                description: "An assessment tool designed to evaluate Grade 12 students' understanding of the 7 P's of Marketing in Entrepreneurship.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=7e817ab7-8510-45a3-8028-ca08fc67a7cd"
            },
            {
                innerTitle: "G12: Bionote Tutor",
                description: "An AI tutor that teaches Grade 12 students how to write a bionote.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=a54cfd4b-07ce-4ec8-aa71-684ddff49893"
            }
    ] },
    admin: { 
        title: "ADMINISTRATIVE", 
        cards: [
            { 
                innerTitle: "Guidance Counselling Assistant", 
                description: "A chatbot designed to provide customer support for guidance counselling sessions, focusing on students and parents seeking academic, emotional, and career guidance.", 
                link: "https://app.capabara.ai/dashboard/chat?toolId=cb979129-74b5-4592-835d-6671cc89a588" 
            },
            {
                innerTitle: "Personalised Schedule Assistant",
                description: "Assist teachers in creating personalised schedules based on their preferences and constraints.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=74e98f15-6ceb-4f8a-a372-0e4a60ef24e8"
            },
            {
                innerTitle: "Scholarship Tool",
                description: "This provides a scholarship guide to the students.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=cba96e81-fabb-4f8c-8876-39df6c44f8af"
            },
            {
                innerTitle: "AI HR Policy Query Assistant (v2.0)",
                description: "Clarify your doubts regarding common company policies and procedures. Afraid of talking to HR? Simply ask any question you have in this safe space!",
                link: "https://app.capabara.ai/dashboard/chat?toolId=6e0283e2-be0d-467c-b30c-15dd54c76290"
            }
            // {
            //     innerTitle: "AI HR Interviewer",
            //     description: "Converse with an AI Interviewer to train and test your interview skills for a company and position of your choosing.",
            //     link: "https://develop.capabara.com/chat?tool=1716976389710x731076969836052500"
            // }
        ] },
    learning: { 
        title: "LEARNING", 
        cards: [
            { 
                innerTitle: "Bartending Interview Role Play", 
                description: "A role play tool for third-year hospitality students to practice bartending interviews focusing on cocktails.", 
                link: "https://app.capabara.ai/dashboard/chat?toolId=396ef791-da47-476c-a350-d566713f216d" 
            },
            {
                innerTitle: "Psychiatric Nursing Tutor",
                description: "An interactive tool for 3rd Year Nursing students that teaches core mental health concepts, guides learning step by step, and assesses understanding through examples and quizzes.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=443e11aa-3b7d-45a2-97d6-1382e35e7d0d"
            },
            {
                innerTitle: "Bulacan Heritage Explorer",
                description: "An interactive guide to the rich history, culture, and key institutions of Bulacan province. Perfect for students, teachers, and residents.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=0f70ab55-2354-48c9-b8bb-49dc47de26cf"
            },
            {
                innerTitle: "Therapeutic Diets Health Teaching Tutor",
                description: "I tutor for teaching therapeutic diets in a hospital setting to nursing students and healthcare professionals.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=9365f1d5-d0c1-4315-a200-1d9a49b82250"
            },
            {
                innerTitle: "MATHinik ka",
                description: "An AI tool to help students remember math formulas using mnemonics and interactive problem-solving, with file/image upload capability",
                link: "https://app.capabara.ai/dashboard/chat?toolId=4d5b76b4-65ca-4133-9eca-4522c37f75c7"
            }
        ] },
    research: { 
        title: "RESEARCH", 
        cards: [
            { 
                innerTitle: "Research Assistant Chatbot", 
                description: "A chatbot designed to assist graduate school researchers with personalised research support and guidance.", 
                link: "https://app.capabara.ai/dashboard/chat?toolId=947846b9-018d-4871-9348-3c10055b809d" 
            },
            {
                innerTitle: "Peer Review Research Tool",
                description: "A peer review research tool is a digital platform or software designed to facilitate the evaluation of academic and scientific work by experts in the field based on standard peer review criteria",
                link: "https://app.capabara.ai/dashboard/chat?toolId=ee88107d-4879-4b45-8721-78621ed74aba"
            },
            {
                innerTitle: "Curi, the Research Architect",
                description: "An AI assistant that guides Filipino students in transforming their initial ideas into a well-structured academic research proposal.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=f537d927-5821-404f-a846-e9f3a44d6f59"
            },
            {
                innerTitle: "ExitLens: Year-on-Year Insight Toolkit",
                description: "Analyse and compare graduating student exit interview data across two years to assess trends and shifts in key themes at the program/college level.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=7d6aa509-b604-423b-8a5b-8482394cedd5"
            },
            {
                innerTitle: "ArguMentor",
                description: "Tool for generating comparative reports on customer satisfaction surveys for research teams.",
                link: "https://app.capabara.ai/dashboard/chat?toolId=ef7afe15-01b1-4dd0-b0df-8c8eb68e7f80"
            }
        ] },
    peel: { title: "INNOVATION", 
            cards: [
                { 
                    innerTitle: "EcoPeel Quest", 
                    description: "A fun, interactive learning app that turns banana peel innovation into exciting trivia, fun facts, and quizzes. Showing how simple waste can become delicious, sustainable creations.", 
                    link: "https://app.capabara.ai/dashboard/chat?toolId=d403ecc2-3ac1-447e-b246-6c7ddb3b7f2a" 
                }
            ] }
};


function populateModal(type) {
    const data = modalData[type];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.cards.map(card => `
    <div class="modalCard">
        <div>
            <h3 class="modalCardHeadtxt">${card.innerTitle}</h3>
        </div>
        <div style="flex-grow:5">
            <p class="modalBodytxt">${card.description}</p>
        </div>
        <div>
            <a href="${card.link}" target="_blank" class="modalLink">
                <button class="lnchBttn">Launch</button>
            </a>
        </div>
    </div>
  `).join('');
}

function closeModal() {
    modal.style.display = "none";
    aboutContent.style.display = "none";
}


document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        closeModal();
    });
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
    if (e.target === aboutContent) closeModal();
});

document.querySelectorAll(".openModal").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        populateModal(type);
        modal.style.display = "flex";
    });
});

document.getElementById("modalopen").addEventListener("click", () => {
    aboutContent.style.display = "flex";
});