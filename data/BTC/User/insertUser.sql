INSERT INTO [dbo].[user]
    (
        [user_id],
        [first_name],
        [last_name],
        [company],
        [dpt],
        [infor_id],
        [infor_pass],
        [dcc_id],
        [dcc_pass],
        [com_id],
        [com_pass],
        [email_id],
        [email_pass],
        [print_id],
        [print_pass],
        [status],
        [instead],
        [create_by]
    )
VALUES 
    (
        @user_id,
        @first_name,
        @last_name,
        'BTC',
        @dpt,
        @infor_id,
        @infor_pass,
        @dcc_id,
        @dcc_pass,
        @com_id,
        @com_pass,
        @email_id,
        @email_pass,
        @print_id,
        @print_pass,
        1,
        @instead,
        @create_by
    )