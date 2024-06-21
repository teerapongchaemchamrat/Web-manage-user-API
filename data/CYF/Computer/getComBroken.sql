SELECT [user_id]
      ,[company]
      ,[case_brand]
      ,[case_model]
      ,[case_service]
      ,[moniter_brand]
      ,[moniter_service]
      ,[moniter_serial]
      ,[key_brand]
      ,[key_serial]
      ,[mouse_brand]
      ,[mouse_serial]
      ,[os]
      ,[office_version]
      ,[office_key]
      ,[office_acc]
      ,[office_pass]
      ,[location]
      ,[status]
      ,[create_date]
      ,[create_by]
      ,[update_last]
      ,[update_by]
FROM [dbo].[computer]
WHERE [status] = 0
ORDER BY [company]