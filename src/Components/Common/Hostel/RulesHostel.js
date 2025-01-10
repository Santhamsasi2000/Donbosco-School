import React from 'react';

const RulesHostel = () => {
  const rules = [
    "Respect and obey the hostel fathers, brothers, sisters, and caretakers.",
    "Follow the hostel schedule without fail.",
    "Strive to excel in studies and discipline.",
    "Behave politely with fellow students.",
    "Do not bring valuables or money. The administration is not responsible for any loss.",
    "Students are not allowed to bring mobile phones. If caught, the mobile phone will not be returned under any circumstances.",
    "Students must protect their belongings.",
    "Protect hostel property. If damaged, you must pay the fine.",
    "Parents can visit students on Sundays. Students are allowed to go home on the second and fourth weeks of every month, and on public holidays.",
    "To get special leave, students must obtain permission from the hostel caretaker or warden. Parents must come in person.",
    "All students must be in the hostel by 7:45 AM on the day after the holiday.",
    "Hostel food charges must be paid by the 10th of each month.",
    "Students who violate hostel rules or behave indisciplined will be immediately expelled from the hostel with the consent of their parents.",
    "The administration is not responsible if students leave the hostel without the caretaker's permission.",
    "Parents must attend all parent meetings held in the hostel.",
    "Students' behavior will be monitored through surveillance cameras.",
    "Fees paid to the hostel will not be refunded under any circumstances.",
    "Parents can contact students by phone only for emergencies.",
    "A medical certificate is required. Inform the administration if you have any illness (the administration is not responsible for sudden illnesses).",
    "You must abide by the decisions of the administration if you are late in paying fees. Only parents, not anyone else, are allowed to talk to the administration for any reason."
  ];

  return (
    <div>
      <p className='fw-bold text-success fs-5'>Hostel Rules :</p>
      <ol>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>
    </div>
  );
};

export default RulesHostel;
