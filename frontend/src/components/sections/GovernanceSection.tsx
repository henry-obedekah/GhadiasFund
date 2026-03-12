import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

const governance = {
  board: [
    {
      name: 'Dr. Kwame Asante',
      title: 'Board Chair',
      bio: 'Former Finance Minister with 25+ years in economic policy',
    },
    {
      name: 'Abena Osei',
      title: 'Board Member',
      bio: 'Diaspora business leader and investment expert',
    },
    {
      name: 'Benjamin Mensah',
      title: 'Board Member',
      bio: 'Real estate developer and infrastructure specialist',
    },
  ],
  advisory: [
    {
      name: 'Prof. Ama Boateng',
      title: 'Economic Advisor',
      bio: 'Leading economist specializing in African development',
    },
    {
      name: 'David Kumah',
      title: 'Legal Advisor',
      bio: 'Corporate lawyer with expertise in investment law',
    },
    {
      name: 'Grace Owusu',
      title: 'ESG Advisor',
      bio: 'Sustainability expert driving impact measurement',
    },
  ],
  investment: [
    {
      name: 'Kofi Darko',
      title: 'Head of Investment',
      bio: 'Portfolio manager with 15 years of experience',
    },
    {
      name: 'Yaa Asiedu',
      title: 'Investment Officer',
      bio: 'Project evaluation and due diligence specialist',
    },
  ],
  managers: [
    {
      name: 'Michael Agyeman',
      title: 'Fund Manager',
      bio: 'Experienced fund manager managing $200M+ AUM',
    },
    {
      name: 'Nana Adjei',
      title: 'Risk Manager',
      bio: 'Risk assessment and portfolio monitoring expert',
    },
  ],
};

const TeamGrid = ({ members }: { members: TeamMember[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white/10 backdrop-blur border border-gold/20 p-6 rounded-xl hover:border-gold/50 transition-all"
        >
          {/* Placeholder avatar */}
          <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-300 rounded-full mb-4 flex items-center justify-center">
            <span className="text-navy text-2xl font-bold">
              {member.name.charAt(0)}
            </span>
          </div>
          <h3 className="text-lg font-bold text-cream mb-1">{member.name}</h3>
          <p className="text-gold font-semibold text-sm mb-3">{member.title}</p>
          <p className="text-cream/70 text-sm">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  );
};

export const GovernanceSection = () => {
  return (
    <section className="relative py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-playfair-display font-bold text-navy mb-4">
            Governance & Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced leaders guiding Ghana's investment future
          </p>
        </motion.div>

        <Tabs defaultValue="board" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-navy">
            <TabsTrigger
              value="board"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy"
            >
              Board
            </TabsTrigger>
            <TabsTrigger
              value="advisory"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy"
            >
              Advisory
            </TabsTrigger>
            <TabsTrigger
              value="investment"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy"
            >
              Investment Committee
            </TabsTrigger>
            <TabsTrigger
              value="managers"
              className="data-[state=active]:bg-gold data-[state=active]:text-navy"
            >
              Fund Managers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="board">
            <TeamGrid members={governance.board} />
          </TabsContent>
          <TabsContent value="advisory">
            <TeamGrid members={governance.advisory} />
          </TabsContent>
          <TabsContent value="investment">
            <TeamGrid members={governance.investment} />
          </TabsContent>
          <TabsContent value="managers">
            <TeamGrid members={governance.managers} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
