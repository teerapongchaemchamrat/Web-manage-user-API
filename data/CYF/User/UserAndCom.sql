SELECT  
		[user].[first_name],
		[user].[last_name],
		[user].[company],
		[user].[dpt],
		[computer].[location],
        [computer].[case_service],
        [computer].[case_model],
		[computer].[os]

FROM [dbo].[user]
INNER JOIN [dbo].[computer]
ON [user].[user_id] = [computer].[user_id] and [user].[company] = [computer].[company]
WHERE [user].[company] = 'CYF' AND [computer].[status] = 1
