package fr.colamine.mabrancheeststable

import net.dv8tion.jda.core.*;
import net.dv8tion.jda.core.entities.*;

public class Main {
	private JDA jda;
	
	public static void main(String... args) {
		jda = new JDABuilder(AccountType.BOT).setToken("INSERT TOKEN HERE").build();
		jda.awaitReady();
		for(TextChannel tc:jda.getTextChannels()) tc.sendMessage("@everyone").queue();
	}
}
